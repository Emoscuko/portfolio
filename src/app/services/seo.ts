import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

const SITE_URL = 'https://emirhanatar.com';
const SITE_NAME = 'Emirhan Atar';
const DEFAULT_IMAGE = `${SITE_URL}/EAIcon.png`;

export interface SeoRouteData {
  title: string;
  description: string;
  path: string;
  keywords: string;
  image?: string;
  imageAlt?: string;
}

const DEFAULT_SEO: SeoRouteData = {
  title: 'Emirhan Atar | Full-Stack Developer',
  description: 'Portfolio of Emirhan Atar, a Java-focused full-stack developer working with OOP, Design Patterns, Go, Angular, Azure, CI/CD, prompt engineering, MCP, RAG, SEO, indexing, and Unity.',
  path: '/',
  keywords: 'Emirhan Atar, full-stack developer, Java developer, Object-Oriented Programming, OOP, Design Patterns, Go developer, Angular developer, Azure developer, CI/CD, Infrastructure as Code, Bicep, prompt engineering, LLM, MCP, RAG, SEO, indexing, Unity developer, portfolio',
  image: DEFAULT_IMAGE,
  imageAlt: 'Emirhan Atar portfolio logo'
};

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private initialized = false;

  init(): void {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    this.applyRouteSeo();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.applyRouteSeo());
  }

  private applyRouteSeo(): void {
    const seo = this.getCurrentSeo();
    const canonicalUrl = `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`;
    const imageUrl = this.toAbsoluteUrl(seo.image ?? DEFAULT_IMAGE);
    const imageAlt = seo.imageAlt ?? `${SITE_NAME} portfolio preview`;

    this.title.setTitle(seo.title);
    this.setCanonical(canonicalUrl);

    this.updateNameTag('description', seo.description);
    this.updateNameTag('author', SITE_NAME);
    this.updateNameTag('keywords', seo.keywords);
    this.updateNameTag('robots', 'index, follow');
    this.updateNameTag('theme-color', '#121212');

    this.updatePropertyTag('og:locale', 'en_US');
    this.updatePropertyTag('og:type', 'website');
    this.updatePropertyTag('og:site_name', SITE_NAME);
    this.updatePropertyTag('og:title', seo.title);
    this.updatePropertyTag('og:description', seo.description);
    this.updatePropertyTag('og:url', canonicalUrl);
    this.updatePropertyTag('og:image', imageUrl);
    this.updatePropertyTag('og:image:alt', imageAlt);

    this.updateNameTag('twitter:card', 'summary_large_image');
    this.updateNameTag('twitter:title', seo.title);
    this.updateNameTag('twitter:description', seo.description);
    this.updateNameTag('twitter:image', imageUrl);
    this.updateNameTag('twitter:image:alt', imageAlt);

    this.setStructuredData(seo, canonicalUrl, imageUrl);
  }

  private getCurrentSeo(): SeoRouteData {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }

    return (route.snapshot.data['seo'] as SeoRouteData | undefined) ?? DEFAULT_SEO;
  }

  private updateNameTag(name: string, content: string): void {
    this.meta.updateTag({ name, content }, `name="${name}"`);
  }

  private updatePropertyTag(property: string, content: string): void {
    this.meta.updateTag({ property, content }, `property="${property}"`);
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private setStructuredData(seo: SeoRouteData, canonicalUrl: string, imageUrl: string): void {
    let script = this.document.querySelector<HTMLScriptElement>('script[data-seo-jsonld="true"]');
    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      this.document.head.appendChild(script);
    }

    const breadcrumbs = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`
      }
    ];

    if (seo.path !== '/') {
      breadcrumbs.push({
        '@type': 'ListItem',
        position: 2,
        name: seo.path === '/fitness' ? 'Fitness' : 'Developer Portfolio',
        item: canonicalUrl
      });
    }

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': `${SITE_URL}/#person`,
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          image: `${SITE_URL}/EAIcon.png`,
          jobTitle: ['Full-Stack Developer', 'Java Developer', 'Prompt Engineer'],
          knowsAbout: ['Java', 'Object-Oriented Programming', 'OOP', 'Design Patterns', 'Go', 'Angular', 'Flutter', 'Azure', 'Azure DevOps', 'Infrastructure as Code', 'Bicep', 'Key Vault', 'Prompt Engineering', 'AI-assisted workflows', 'LLM Deployment', 'Hooks', 'Plugins', 'MCP', 'RAG', 'CI/CD', 'SEO', 'Indexing', 'Unity', 'Mobile Game Development', 'Fitness', 'Nutrition'],
          sameAs: [
            'https://github.com/Emoscuko',
            'https://www.linkedin.com/in/emirhan-atar-26a374309/',
            'https://www.instagram.com/emirhanatar/',
            'https://www.instagram.com/minimpekka/',
            'https://www.tiktok.com/@emirhannatar',
            'https://www.youtube.com/@emirhannatar'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          publisher: { '@id': `${SITE_URL}/#person` },
          inLanguage: ['en', 'tr']
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: seo.title,
          description: seo.description,
          image: imageUrl,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#person` },
          inLanguage: ['en', 'tr']
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: breadcrumbs
        }
      ]
    });
  }

  private toAbsoluteUrl(url: string): string {
    if (url.startsWith('http')) {
      return url;
    }

    return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`;
  }
}
