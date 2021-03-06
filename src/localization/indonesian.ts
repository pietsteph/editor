//Uncomment this line on creating a translation file
import { editorLocalization, defaultStrings } from "../editorLocalization";

export var idStrings = {
  //survey templates
  survey: {
    edit: "Ubah",
    dropQuestion: "Silahkan letakkan pertanyaan di sini dari Toolbox di sebelah kiri.",
    copy: "Salin",
    addToToolbox: "Tambahkan ke Toolbox",
    deletePanel: "Hapus Panel",
    deleteQuestion: "Hapus Pertanyaan",
    convertTo: "Mengubah ke",
    drag: "Tarik elemen"
  },
  //questionTypes
  qt: {
    default: "Default",
    checkbox: "Checkbox",
    comment: "Comment",
    imagepicker: "Image Picker",
    dropdown: "Combobox",
    file: "File",
    html: "Html",
    matrix: "Matrix (single choice)",
    matrixdropdown: "Matrix (multiple choice)",
    matrixdynamic: "Matrix (dynamic rows)",
    multipletext: "Multiple Text",
    panel: "Panel",
    paneldynamic: "Panel (dynamic panels)",
    radiogroup: "Radiogroup",
    rating: "Rating",
    text: "Single Input",
    boolean: "Boolean",
    expression: "Expression"
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Default ({0})",
    survey: "Survei",
    settings: "Pengaturan Survei",
    editSurvey: "Ubah Survei",
    addNewPage: "Tambah Halaman Baru",
    moveRight: "Geser ke Kanan",
    moveLeft: "Geser ke Kiri",
    deletePage: "Hapus Halaman",
    editPage: "Ubah Halaman",
    edit: "Ubah",
    newPageName: "halaman",
    newQuestionName: "pertanyaan",
    newPanelName: "panel",
    testSurvey: "Coba Survei",
    testSurveyAgain: "Coba Survei Lagi",
    testSurveyWidth: "Lebar survei: ",
    embedSurvey: "Embed Survei",
    translation: "Terjemahan",
    saveSurvey: "Simpan Survei",
    designer: "Rancangan Survei",
    jsonEditor: "Pengubah JSON",
    undo: "Undo",
    redo: "Redo",
    options: "Pilihan",
    generateValidJSON: "Hasilkan JSON yang Valid",
    generateReadableJSON: "Hasilkan JSON yang dapat dibaca",
    toolbox: "Toolbox",
    toolboxGeneralCategory: "Umum",
    delSelObject: "Hapus objek yang dipilih",
    editSelObject: "Ubah objek yang dipilih",
    correctJSON: "Please correct JSON.",
    surveyResults: "Hasil survei: ",
    surveyResultsTable: "Sebagai tabel",
    surveyResultsJson: "Sebagai JSON",
    resultsTitle: "Judul Pertanyaan",
    resultsName: "Nama Pertanyaan",
    resultsValue: "Nilai Jawaban",
    resultsDisplayValue: "Tampilkan Nilai",
    modified: "Dimodifikasi",
    saving: "Menyimpan",
    saved: "Tersimpan",
    saveError: "Error! Konten editor tidak berhasil disimpan.",
    translationAddLanguage: "Pilih bahasa untuk terjemahan",
    translationShowAllStrings: "Tampilkan seluruh string",
    translationShowAllPages: "Tampilkan seluruh halaman",
    translationNoStrings: "Tidak ada string diterjemahkan. Silahkan ganti penyaring.",
    translationExportToSCVButton: "Export ke CSV",
    translationImportFromSCVButton: "Import dari CSV",
    translationMergeLocaleWithDefault: "Gabungkan {0} dengan default locale"
  },
  //Property names in table headers
  pel: {
    isRequired: "Wajib?"
  },
  //Property Editors
  pe: {
    apply: "Terapkan",
    ok: "OK",
    cancel: "Batal",
    reset: "Reset",
    close: "Tutup",
    delete: "Hapus",
    addNew: "Tambahkan Baru",
    addItem: "Klik untuk menambahkan sebuah item...",
    removeAll: "Hapus Semua",
    edit: "Ubah",
    itemValueEdit: "Ditampilkan Jika",
    editChoices: "Ubah Pilihan",
    move: "Pindah",
    empty: "<kosong>",
    notEmpty: "<ubah nilai>",
    fastEntry: "Entri Cepat",
    formEntry: "Entri Form",
    testService: "Coba layanan",
    conditionSelectQuestion: "Pilih pertanyaan...",
    conditionValueQuestionTitle: "Silahkan masukkan/pilih nilai",
    conditionButtonAdd: "Tambah",
    conditionButtonReplace: "Ganti",
    conditionHelp:
      "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "Please enter an expression. You may use curly brackets to get access to the question values: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Press ctrl+space to get expression completion hint",
    aceEditorRowTitle: "Current row",
    aceEditorPanelTitle: "Current panel",
    showMore: "For more details please check the documentation",
    conditionShowMoreUrl:
      "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Pertanyaan tersedia:",
    cellsEmptyRowsColumns: "Harus ada setidaknya satu kolom atau baris",

    propertyIsEmpty: "Silahkan masukkan nilai",
    value: "Nilai",
    text: "Teks",
    rowid: "ID baris",
    imageLink: "Link Gambar",
    columnEdit: "Ubah kolom: {0}",
    itemEdit: "Ubah item: {0}",

    url: "URL",
    path: "Path",
    valueName: "Nama nilai",
    titleName: "Nama judul",

    hasOther: "Memiliki item lain",
    otherText: "Teks item lain",
    name: "Nama",
    title: "Judul",
    cellType: "Jenis sel",
    colCount: "Jumlah kolom",
    choicesOrder: "Tentukan urutan pilihan",
    visible: "Terlihat?",
    isRequired: "Wajib?",
    startWithNewLine: "Mulai dengan baris baru?",
    rows: "Jumlah baris",
    placeHolder: "Masukkan placeholder",
    showPreview: "Tunjukkan tinjauan gambar?",
    storeDataAsText: "Simpan konten berkas dalam hasil JSON sebagai teks",
    maxSize: "Ukuran maksimum berkas dalam byte",
    imageHeight: "Tinggi gambar",
    imageWidth: "Lebar gambar",
    rowCount: "Jumlah baris",
    columnLayout: "Tata letak kolom",
    addRowLocation: "Tambah lokasi tombol baris",
    addRowText: "Tambah teks tombol baris",
    removeRowText: "Hapus teks tombol baris",
    minRateDescription: "Deskripsi nilai minimum",
    maxRateDescription: "Deskripsi nilai maksimum",
    inputType: "Jenis masukan",
    optionsCaption: "Keterangan pilihan",
    defaultValue: "Nilai standar",
    cellsDefaultRow: "Teks sel standar",

    surveyEditorTitle: "Ubah pengaturan survei",
    qEditorTitle: "Ubah: {0}",

    maxLength: "Panjang maksimum",

    //survey
    showTitle: "Tampilkan/sembunyikan judul",
    locale: "Bahasa standar",
    mode: "Mode (ubah/baca saja)",
    clearInvisibleValues: "Bersihkan nilai tak terlihat",
    cookieName: "Nama cookie (untuk menonaktifkan menjalankan survei dua kali secara lokal)",
    sendResultOnPageNext: "Kirim hasil survei pada halaman selanjutnya",
    storeOthersAsComment: "Simpan nilai 'lainnya' pada bidang lainnya",
    showPageTitles: "Tampilkan judul halaman",
    showPageNumbers: "Tampilkan nomor halaman",
    pagePrevText: "Teks halaman tombol sebelumnya",
    pageNextText: "Teks halaman tombol selanjutnya",
    completeText: "Teks tombol selesai",
    startSurveyText: "Teks tombol mulai",
    showNavigationButtons: "Tampilkan tombol navigasi (navigasi standar)",
    showPrevButton: "Tampilkan tombol sebelumnya (pengguna mungkin kembali ke halaman sebelumnya)",
    firstPageIsStarted: "Halaman pertama pada survei adalah halaman yang telah dimulai.",
    showCompletedPage: "Tampilkan keseluruhan halaman di akhir (completedHtml)",
    goNextPageAutomatic:
      "Setelah menjawa seluruh pertanyaan, pergi ke halaman berikutnya secara otomatis",
    showProgressBar: "Tampilkan progress bar",
    questionTitleLocation: "Lokasi judul pertanyaan",
    requiredText: "Simbil pertanyaan wajib",
    questionStartIndex: "Indeks mulai pertanyaan (1, 2 atau 'A', 'a')",
    showQuestionNumbers: "Tampilkan nomor pertanyaan",
    questionTitleTemplate:
      "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "Question error location",
    focusFirstQuestionAutomatic: "Focus first question on changing the page",
    questionsOrder: "Elements order on the page",
    maxTimeToFinish: "Maximum time to finish the survey",
    maxTimeToFinishPage: "Maximum time to finish a page in the survey",
    showTimerPanel: "Show timer panel",
    showTimerPanelMode: "Show timer panel mode",
    renderMode: "Render mode",
    allowAddPanel: "Allow adding a panel",
    allowRemovePanel: "Allow removing the panel",
    panelAddText: "Adding panel text",
    panelRemoveText: "Removing panel text",
    isSinglePage: "Show all elements on one page",

    tabs: {
      general: "Umum",
      fileOptions: "Pilihan berkas",
      html: "Editor Html",
      columns: "Kolom",
      rows: "Baris",
      choices: "Pilihan",
      items: "Item",
      visibleIf: "Terlihat Jika",
      enableIf: "Memungkinkan Jika",
      requiredIf: "Wajib Jika",
      rateValues: "Nilai Tingkat",
      choicesByUrl: "Pilih dari Web",
      matrixChoices: "Pilihan Standar",
      multipleTextItems: "Masukan Teks",
      validators: "Validator",
      navigation: "Navigasi",
      question: "Pertanyaan",
      completedHtml: "Completed Html",
      loadingHtml: "Loading Html",
      timer: "Timer/Quiz",
      triggers: "Triggers",
      templateTitle: "Template title"
    },
    editProperty: "Edit property '{0}'",
    items: "[ Items: {0} ]",

    enterNewValue: "Please, enter the value.",
    noquestions: "There is no any question in the survey.",
    createtrigger: "Please create a trigger",
    triggerOn: "On ",
    triggerMakePagesVisible: "Make pages visible:",
    triggerMakeQuestionsVisible: "Make elements visible:",
    triggerCompleteText: "Complete the survey if succeed.",
    triggerNotSet: "The trigger is not set",
    triggerRunIf: "Run if",
    triggerSetToName: "Change value of: ",
    triggerFromName: "Copy value from: ",
    triggerRunExpression: "Run this Expression:",
    triggerSetValue: "to: ",
    triggerIsVariable: "Do not put the variable into the survey result."
  },
  //Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "firstExpanded",
    off: "off",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    left: "left",
    color: "color",
    date: "date",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged"
  },
  //Operators
  op: {
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "less or equals"
  },
  //Embed window
  ew: {
    angular: "Use Angular version",
    jquery: "Use jQuery version",
    knockout: "Use Knockout version",
    react: "Use React version",
    vue: "Use Vue version",
    bootstrap: "For bootstrap framework",
    standard: "No bootstrap",
    showOnPage: "Show survey on a page",
    showInWindow: "Show survey in a window",
    loadFromServer: "Load Survey JSON from server",
    titleScript: "Scripts and styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  //Test Survey
  ts: {
    selectPage: "Select the page to test it:",
    showInvisibleElements: "Show invisible elements"
  },
  validators: {
    answercountvalidator: "answer count",
    emailvalidator: "e-mail",
    expressionvalidator: "expression",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "complete survey",
    setvaluetrigger: "set value",
    copyvaluetrigger: "copy value",
    runexpressiontrigger: "run expression",
    visibletrigger: "change visibility"
  },
  //Properties
  p: {
    name: "name",
    title: {
      name: "title",
      title: "Leave it empty, if it is the same as 'Name'"
    },

    navigationButtonsVisibility: "navigationButtonsVisibility",
    questionsOrder: "questionsOrder",
    maxTimeToFinish: "maxTimeToFinish",

    visible: "visible",
    visibleIf: "visibleIf",
    questionTitleLocation: "questionTitleLocation",
    description: "description",
    state: "state",
    isRequired: "isRequired",
    requiredIf: "requiredIf",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "page",

    width: "width",

    commentText: "commentText",
    valueName: "valueName",
    enableIf: "enableIf",
    defaultValue: "defaultValue",
    correctAnswer: "correctAnswer",
    readOnly: "readOnly",
    validators: "validators",
    titleLocation: "titleLocation",

    hasComment: "hasComment",
    hasOther: "hasOther",
    choices: "choices",
    choicesOrder: "choicesOrder",
    choicesByUrl: "choicesByUrl",
    otherText: "otherText",
    otherErrorText: "otherErrorText",
    storeOthersAsComment: "storeOthersAsComment",

    label: "label",
    showTitle: "showTitle",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "cols",
    rows: "rows",
    placeHolder: "placeHolder",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "format",
    displayStyle: "displayStyle",
    currency: "currency",
    useGrouping: "useGrouping",

    showPreview: "showPreview",
    allowMultiple: "allowMultiple",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    storeDataAsText: "storeDataAsText",
    maxSize: "maxSize",

    html: "html",

    columns: "columns",
    cells: "cells",
    isAllRowRequired: "isAllRowRequired",

    horizontalScroll: "horizontalScroll",
    cellType: "cellType",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "rowCount",
    minRowCount: "minRowCount",
    maxRowCount: "maxRowCount",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "confirmDelete",
    confirmDeleteText: "confirmDeleteText",
    addRowLocation: "addRowLocation",
    addRowText: "addRowText",
    removeRowText: "removeRowText",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "size",

    locale: "locale",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    hasNone: "hasNone",
    noneText: "noneText",

    text: "text",
    minValue: "minimum value",
    maxValue: "maximum value",
    minLength: "minimum length",
    maxLength: "maximum length",
    allowDigits: "allow digits",
    minCount: "minimum count",
    maxCount: "maximum count",
    regex: "regular expression"
  }
};
// Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["id"] = idStrings;