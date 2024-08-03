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
import {LinkPlugin} from "@lexical/react/LexicalLinkPlugin";
import {TablePlugin} from "@lexical/react/LexicalTablePlugin";
import {ListPlugin} from "@lexical/react/LexicalListPlugin";
import {CheckListPlugin} from "@lexical/react/LexicalCheckListPlugin";
import {TabIndentationPlugin} from "@lexical/react/LexicalTabIndentationPlugin";
import {AutoLinkPlugin} from "@lexical/react/LexicalAutoLinkPlugin";
import {ClearEditorPlugin} from "@lexical/react/LexicalClearEditorPlugin";
import {MarkdownShortcutPlugin} from "@lexical/react/LexicalMarkdownShortcutPlugin";
import LexicalTableOfContentsPlugin from "@lexical/react/LexicalTableOfContents";
import {AutoLinkNode, LinkNode} from '@lexical/link';
import {ListItemNode, ListNode} from '@lexical/list';
import ToolbarPlugin from './toolbar-plugin'
import {AutoFocusPlugin} from "@lexical/react/LexicalAutoFocusPlugin";

type Props = {
    key: string;
    id: string;
    content:string;
    height?:string;
}

const LexicalCard = ({props, removeCard, className, style = {}, children, ...otherProps}: {props:Props, removeCard:(key:string)=>void, className?: string, key?: string, style?: {[x:string] : string}, children?: React.ReactNode[] }) => {
    const theme = {
    }

    // Catch any errors that occur during Lexical updates and log them
    // or throw them as needed. If you don't throw them, Lexical will
    // try to recover gracefully without losing user data.
    function onError(error: Error) {
        console.error(error);
        throw error;
    }

    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
        nodes: []
        // nodes: [AutoLinkNode, ListNode, ListItemNode]
    };


    const [editorState, setEditorState] = useState<string>("");
    function onChange(editorState: EditorState) {
        // Call toJSON on the EditorState object, which produces a serialization safe string
        const editorStateJSON = editorState.toJSON();
        // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
        setEditorState(JSON.stringify(editorStateJSON));
    }

    const URL_MATCHER =
        /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

    const MATCHERS = [
        (text : string) => {
            const match = URL_MATCHER.exec(text);
            if (match === null) {
                return null;
            }
            const fullMatch = match[0];
            return {
                index: match.index,
                length: fullMatch.length,
                text: fullMatch,
                url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,
                // attributes: { rel: 'noreferrer', target: '_blank' }, // Optional link attributes
            };
        },
    ];

    return (
        <div className={"lexical-card-rnd"}>
        {/*<div {...otherProps} style={{...style}} className={`lexical-card-container lexical-card ${className}`} id={props?.id} >*/}
            <div className={"component-header"}>
                {/*<span className={"pi pi-arrows-alt drag-handle"} ></span>*/}
                <button onClick={() => removeCard(props.key)}>
                    <span className={"pi pi-trash"}></span>
                </button>
            </div>
            <LexicalComposer initialConfig={initialConfig}>
                <div className="editor-container">
                    <ToolbarPlugin />
                    <div className="editor-inner" style={{height: props.height}}>
                        <RichTextPlugin
                            contentEditable={<ContentEditable className={"editor-input"}/>}
                            placeholder={<div className={"editor-placeholder"}>Enter some text...</div>}
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        <HistoryPlugin/>
                        <AutoFocusPlugin />
                        {/*<OnChangePlugin onChange={onChange}/>*/}
                        {/*/!*<LinkPlugin />*!/*/}
                        {/*<ListPlugin />*/}
                        {/*/!*<CheckListPlugin />*!/*/}
                        {/*/!*<TablePlugin />*!/*/}
                        {/*/!*<TabIndentationPlugin />*!/*/}
                        {/*<AutoLinkPlugin matchers={MATCHERS} />*/}
                        {/*<ClearEditorPlugin/>*/}
                        {/*<MarkdownShortcutPlugin/>*/}
                    </div>
                </div>
            </LexicalComposer>
        {/*    {children}*/}
        {/*</div>*/}
        </div>
    );
}

export default LexicalCard;
