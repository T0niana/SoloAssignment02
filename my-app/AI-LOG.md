Prompt: „Hilf mir, die ersten Komponenten für die QuickNotes-App komplett zu verstehen und einzubauen.“
Übernommen: Grundstruktur für BaseCard, SearchBar und NoteForm.
Geändert/verstanden: Die Komponenten haben getrennte Aufgaben und verwalten nicht selbst die gesamte Notizliste.

Prompt: „Wie verwende ich Slots in der BaseCard-Komponente?“
Übernommen: Benannter header-Slot und Default-Slot in BaseCard.
Geändert/verstanden: BaseCard ist eine allgemeine Komponente und weiß nichts über Notizen.

Prompt: „Wie funktioniert v-model bei einer eigenen SearchBar-Komponente?“
Übernommen: modelValue als Prop und update:modelValue als Event.
Geändert/verstanden: Eine Prop wird nicht direkt verändert; der neue Wert wird mit emit an die Elternkomponente gemeldet.

Prompt: „Hilf mir beim Erstellen von NoteForm und NoteCard.“
Übernommen: add-note-Event im Formular und delete-Event in der Notizkarte.
Geändert/verstanden: NoteForm erzeugt nur die eingegebenen Daten und NoteCard meldet nur die ID der zu löschenden Notiz nach oben.

Prompt: „Wie implementiere ich addNote, deleteNote und die Live-Suche in useNotes?“
Übernommen: Hinzufügen mit push, Löschen mit filter und Filtern mit computed.
Geändert/verstanden: computed berechnet die sichtbaren Notizen neu, wenn sich der Suchbegriff oder die Notizliste ändert.

Prompt: „Hilf mir bei einem Syntaxfehler in useNotes.js.“
Übernommen: Korrektur der fehlenden Klammern und Ergänzung der Filterlogik.
Geändert/verstanden: Mehrere noch offene Funktionen und der computed-Aufruf mussten jeweils korrekt geschlossen werden. Für IDs verwende ich Date.now(), damit sie nach einem Reload nicht wieder bei null beginnen.

Prompt: „Wie binde ich eine globale CSS-Datei in Vite ein und behebe den App.vue-Import?“
Übernommen: Globaler CSS-Import in main.ts und relativer Import von ./App.vue.
Geändert/verstanden: Globale Styles werden einmal in main.ts geladen; <style scoped> gilt dagegen nur innerhalb der jeweiligen Vue-Komponente.