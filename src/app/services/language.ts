import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'tr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = signal<Language>('en');

  readonly language = this.currentLanguage.asReadonly();

  readonly isTr = computed(() => this.currentLanguage() === 'tr');
  readonly isEn = computed(() => this.currentLanguage() === 'en');

  toggleLanguage() {
    this.currentLanguage.set(this.currentLanguage() === 'en' ? 'tr' : 'en');
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
  }

  // Helper function to translate content based on language
  translate(en: string, tr: string): string {
    return this.currentLanguage() === 'en' ? en : tr;
  }
}
