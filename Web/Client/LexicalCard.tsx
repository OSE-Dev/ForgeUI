import {$getRoot, $getSelection, EditorState} from 'lexical';
import React, {useEffect, useState} from 'react';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";

type Props = {
    key: string;
    id: string;
    content:string;
}

const LexicalCard = (props: Props) => {
    const theme = {
    }

    // Catch any errors that occur during Lexical updates and log them
    // or throw them as needed. If you don't throw them, Lexical will
    // try to recover gracefully without losing user data.
    function onError(error: Error) {
        console.error(error);
    }

    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
    };

    function MyOnChangePlugin({ onChange = (editorState : EditorState) => {} }) {
        const [editor] = useLexicalComposerContext();
        useEffect(() => {
            return editor.registerUpdateListener(({editorState}) => {
                onChange(editorState);
            });
        }, [editor, onChange]);
        return null;
    }


    const [editorState, setEditorState] = useState<string>("");
    function onChange(editorState: EditorState) {
        // Call toJSON on the EditorState object, which produces a serialization safe string
        const editorStateJSON = editorState.toJSON();
        // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
        setEditorState(JSON.stringify(editorStateJSON));
    }

    return (
        <div className={"lexical-card"} key={props.key} id={props.id} >
            <LexicalComposer initialConfig={initialConfig}>u
                <RichTextPlugin
                    contentEditable={<ContentEditable/>}
                    placeholder={<div>Enter some text...</div>}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <HistoryPlugin/>
                <MyOnChangePlugin onChange={onChange}/>
            </LexicalComposer>
        </div>
    );
}

export default LexicalCard;
