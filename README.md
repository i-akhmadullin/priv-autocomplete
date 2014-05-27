Sublime Text priv.js-autocomplete
===

Автодополнение для priv.js

![Автодополнение для priv.js](/priv.gif "Автодополнение для priv.js")

Установка
----------------------------------

1. Ctrl+Shift+P → Package Control: Add Repository → https://github.com/i-akhmadullin/priv-autocomplete

2. Ctrl+Shift+P → Package Control: Install Package → priv-autocomplete

3. В *.priv.js файлах будет срабатывать автодополнение, sublime будет определять синтаксис как priv.js

Линтинг с sublimelinter-jscs
----------------------------------
Чтобы линтер проверял файлы priv.js также как и обычные js-файлы, надо расширить `syntax_map` в файле `User/SublimeLinter.sublime-settings`:
```
"syntax_map": {
    "priv.js": "javascript"
},
```
