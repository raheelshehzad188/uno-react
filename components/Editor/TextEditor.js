import {Editor} from "@tinymce/tinymce-react";
import React from "react";

const TextEditor = ({setFieldValue,name,initialValue}) => {
  return(
    <Editor
      onChange={ (event)=>{setFieldValue(
        name ,
        event.target.getContent()
      )}}
      apiKey='zx16n9k8q09ciozgzezlz4qae59ev6v61bvok1g733z52smk'
      initialValue={initialValue}
      name={name}
      init={{
        branding: false,
        height: 400,
        menubar: true,
        selector: 'textarea#full-featured',
        plugins: 'preview powerpaste paste casechange importcss searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker editimage help formatpainter permanentpen pageembed charmap hr mentions quickbars linkchecker emoticons advtable export footnotes mergetags autocorrect typography template advtemplate textpattern imagetools anchor toc print',
        toolbar: "aidialog aishortcuts | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | save print export | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck", // Note: if a toolbar item requires a plugin, the item will not present in the toolbar if the plugin is not also loaded.

        image_advtab: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',

      }}
      // onChange={this.onChange}
    />
  );
}

export default TextEditor;