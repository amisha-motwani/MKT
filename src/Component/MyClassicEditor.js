import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Font from "@ckeditor/ckeditor5-font/src/font";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  UploadAdapter,
  Autoformat,
  Bold,
  Italic,
  Underline,
  Font,
  FontSize,
  FontColor,
  Highlight,
  Image,
  ImageToolbar,
  ImageUpload,
  Link,
  List,
  Paragraph,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "|",
      "fontSize",
      "fontColor",
      "highlight ",
      "|",
      "link",
      "imageUpload",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "blockQuote",
      "|",
      "undo",
      "redo",
    ],
  },
  fontSize: {
    options: ["tiny", "small", "default", "big", "large"],
  },
  fontColor: {
    colors: [
      { color: "hsl(0, 0%, 0%)", label: "Black" },
      { color: "hsl(0, 0%, 30%)", label: "Dark gray" },
      { color: "hsl(0, 0%, 60%)", label: "Gray" },
      { color: "hsl(0, 0%, 90%)", label: "Light gray" },
      { color: "hsl(0, 0%, 100%)", label: "White" },
      { color: "hsl(0, 75%, 60%)", label: "Red" },
      { color: "hsl(30, 75%, 60%)", label: "Orange" },
      { color: "hsl(60, 75%, 60%)", label: "Yellow" },
      { color: "hsl(120, 75%, 60%)", label: "Green" },
      { color: "hsl(180, 75%, 60%)", label: "Cyan" },
      { color: "hsl(240, 75%, 60%)", label: "Blue" },
      { color: "hsl(270, 75%, 60%)", label: "Purple" },
    ],
  },
  image: {
    toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
  },
  language: "en",
};

export default ClassicEditor;
