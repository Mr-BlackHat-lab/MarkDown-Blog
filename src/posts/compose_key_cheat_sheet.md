---
title: "Compose Key A Complete Guide"
date: "2025-12-17"
author: "Mr-BlackHAt-lab"
description: "Learn how to Use Compose key for Fast work  and Accesing special key ."
---

# Compose Key Cheat Sheet

> This file lists **standard and commonly supported Compose key sequences** used on Linux systems (XKB / Wayland / Hyprland / fcitx / ibus).
>
> ⚠️ Note: There is **no single universal list of *all* compose sequences**. Some depend on locale, font, or input method. This document covers the **widely accepted and practical set**.

---

## How Compose Works

```
Compose → symbol → letter
```

In your setup:
- **Compose key = Caps Lock**
- **Shift = uppercase letters**

The compose indicator appears briefly while waiting for the sequence.

---

## Accented Letters

### Acute ( ´ )
```
Compose + ' + a = á
Compose + ' + e = é
Compose + ' + i = í
Compose + ' + o = ó
Compose + ' + u = ú
Compose + ' + y = ý
```

### Grave ( ` )
```
Compose + ` + a = à
Compose + ` + e = è
Compose + ` + i = ì
Compose + ` + o = ò
Compose + ` + u = ù
```

### Circumflex ( ^ )
```
Compose + ^ + a = â
Compose + ^ + e = ê
Compose + ^ + i = î
Compose + ^ + o = ô
Compose + ^ + u = û
```

### Diaeresis / Umlaut ( " )
```
Compose + " + a = ä
Compose + " + e = ë
Compose + " + i = ï
Compose + " + o = ö
Compose + " + u = ü
Compose + " + y = ÿ
```

### Tilde ( ~ )
```
Compose + ~ + a = ã
Compose + ~ + n = ñ
Compose + ~ + o = õ
```

### Ring ( ° )
```
Compose + o + a = å
Compose + o + A = Å
```

---

## Ligatures & Special Letters

```
Compose + a + e = æ
Compose + A + E = Æ
Compose + o + e = œ
Compose + O + E = Œ
Compose + s + s = ß
Compose + d + h = ð
Compose + t + h = þ
```

---

## Currency Symbols

```
Compose + e + = = €
Compose + l + - = £
Compose + y + = = ¥
Compose + c + = = ¢
Compose + r + s = ₹
```

---

## Mathematical Symbols

```
Compose + = + = = ≠
Compose + < + = = ≤
Compose + > + = = ≥
Compose + - + + = ±
Compose + 1 + 2 = ½
Compose + 1 + 4 = ¼
Compose + 3 + 4 = ¾
Compose + i + n = ∞
Compose + s + q = √
Compose + a + n = ∧
Compose + o + r = ∨
```

---

## Arrows

```
Compose + - + > = →
Compose + < + - = ←
Compose + | + ^ = ↑
Compose + | + v = ↓
Compose + = + > = ⇒
Compose + < + = = ⇐
```

---

## Punctuation & Typography

```
Compose + . + . = …
Compose + - + - = –
Compose + - + - + - = —
Compose + ' + ' = ‘
Compose + " + " = “
Compose + < + < = «
Compose + > + > = »
Compose + ! + ! = ¡
Compose + ? + ? = ¿
```

---

## Legal & Text Symbols

```
Compose + o + c = ©
Compose + t + m = ™
Compose + r + o = ®
Compose + s + o = §
Compose + p + p = ¶
```

---

## Superscripts & Subscripts

```
Compose + ^ + 1 = ¹
Compose + ^ + 2 = ²
Compose + ^ + 3 = ³
Compose + _ + 1 = ₁
Compose + _ + 2 = ₂
Compose + _ + 3 = ₃
```

---

## Greek Letters (Lowercase)

```
Compose + g + a = α
Compose + g + b = β
Compose + g + g = γ
Compose + g + d = δ
Compose + g + p = π
Compose + g + s = σ
Compose + g + w = ω
```

---

## Tips

- Press **Space** or **Esc** to cancel Compose
- Sequences are **case-sensitive**
- Not all fonts support all symbols
- Some sequences may vary by distro or input method

---

## Reference

This list is based on common XKB Compose tables used across Linux distributions.

For a full system-specific list, see:
```
/usr/share/X11/locale/*/Compose
```

