import React, {useRef} from "react";
import  {Editor} from "./tinymce/components/Editor";


function  ContentEditor(props) {
    const editorRef = useRef(null);
    function handleEditorChange (content, editor) {
        if (editorRef.current) {
            if(props.update)
            {
                props.update(editorRef.current.getContent());
            }
        }
    }
        return (
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={String(props.content)}
                init={{
                    height: 500,
                    plugins: 'preview anchor autolink quickbars autoresize charmap insertdatetime importcss codesample emoticons image visualchars link lists media searchreplace table visualblocks wordcount help fullscreen checklist casechange export formatpainter pageembed a11ychecker  advlist directionality permanentpen powerpaste advtable pagebreak code nonbreaking advcode editimage tinycomments tableofcontents footnotes mergetags',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                    ]
                }}
                onEditorChange={handleEditorChange}
            />
        );
}
export default ContentEditor;




