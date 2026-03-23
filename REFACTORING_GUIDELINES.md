# Refactoring Guidelines

Bu doküman, portfolio projesinin sürdürülebilirliğini artırmak için gereken refactoring standartlarını ve mevcut teknik borçların nasıl temizleneceğini açıklar.

## 1. Kod Temizleme (Cleanup) İlkeleri
- **Kullanılmayan Kodlar:** Projede referans verilmeyen (unused) her türlü class, değişken veya fonksiyonu (`ng build` veya linter uyarılarına bakarak) anında silin.
- **Console Loglar:** Production ortamına gidecek kodlarda asla `console.log()` bırakmayın. Debug işlemleri bittikten sonra temizleyin.
- **Yorum Satırları:** "Commented-out code" (yorum satırına alınmış eski kod parçaları) projede yer almamalıdır. Geçmiş versiyonlar için Git geçmişini kullanın.

## 2. Stil (SCSS) Refactoring
- **Global Değişkenler:** Renk paleti, geçiş süreleri ve font size değerlerini doğrudan CSS içinden değil, `variables.scss` üzerinden kullanın.
- **Prefix Standardı:** `developer` ve `fitness` sayfaları arasında stil çakışmalarını önlemek için `.dev-` ve `.fit-` prefix'lerini koruyun.
- **DOW (Don't Over-Write):** `!important` kullanımından kaçının; bunun yerine CSS specificity (seçicilik) hiyerarşisini düzeltin.

## 3. Komponent Mimarisi
- **100 Satır Kuralı:** Bir komponentin HTML veya SCSS dosyası 150-200 satırı aşıyorsa, mantıksal olarak alt komponentlere (`ProjectCard`, `StatBox`, etc.) bölünmelidir.
- **Bağımsızlık:** Developer ve Lifestyle (Fitness) sayfaları birbirinden bağımsız vertical modüllerdir. Bir tarafın refactoring işlemi diğer tarafın UI'ını bozmamalıdır.

## 4. Angular Standartları
- **Standalone:** Yeni eklenen her komponent `standalone: true` olmalıdır.
- **Signal Kullanımı:** Mümkünse Angular Signals (`signal`, `computed`, `effect`) kullanarak modern state yönetimini benimseyin.
- **Control Flow:** `@if`, `@for` gibi yeni Angular kontrol akışlarını kullanın; eski structural directive (`*ngIf`, `*ngFor`) kullanımlarını refactor edin.

## 5. SEO & Performans
- **İkonlar ve Resimler:** Public klasöründeki büyük görselleri (`.png`, `.jpg`) mümkünse `.webp` veya `.avif` formatına çevirin.