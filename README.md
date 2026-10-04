# Solo Assignment 2

## Projekt einrichten

### 1. Repository von GitHub klonen


```bash
git clone <https://github.com/T0niana/SoloAssignment02.git>
```

Terminal für Projektordner öffnen


### 2. Dependencies installieren

Alle benötigten Abhängigkeiten aus der `package.json` herunterladen:
```bash
npm install
```

### 3. Projekt starten

Den Entwicklungsserver starten:
```bash
npm run dev
```
Anschließend die im Terminal angezeigte lokale Adresse im Browser öffnen, zum Beispiel:
http://localhost:5173


## Begründung der Struktur
Die Funktionen zur Verwaltung sind im useNotes, damit die Komponenten wirklich nur für die Darstellung und Eingaben zuständig sind. Dadurch müssen funktionen wie anlegen, filtern und löschen nur einmal deklariert werden und können dann immer wieder verwendet werden.


## Reflexionsfragen
### Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie lösen wir das stattdessen?
In vue werden Daten von dem parent an das child via props weitergegeben. Das child darf diese nicht verändern weil props schreibgeschützt sind. Bei click z.B. auf den löschen button wird ein das event mit der ID gesendet. App.vue empfängt das und ruft die deleteNote() aus dem Composable auf. 


### Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen – teilen sie sich die Notizen oder nicht?
Nein, die Komponenten bekommen nicht denselben reaktiven ref. Bei jedem Aufruf wird ein neuer ref durch useLocalStorage() erstellt. Sie haben dann beide den gleichen Eintrag aber Änderungen werden nicht automatisch synchronisiert.


### Wozu dient das Note-Interface, wenn der Code auch ohne liefe?
Es hilft beim festlegen, welche Daten eine Notiz haben soll und welchen Type diese haben.