import AceEditor from 'react-ace';

import { CellType } from '@/types/cell.types';

export interface CodeEditorProps {
  language: CellType;
}

export default function CodeEditor({ language }: CodeEditorProps) {
  return (
    <AceEditor
      placeholder={
        language === CellType.Markdown
          ? '(Markdown support)'
          : '(LaTeX expression)'
      }
      mode={language}
      width="100%"
      theme="terminal"
      fontSize={14}
      lineHeight={16}
      showGutter
      highlightActiveLine
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
        maxLines: 15,
        minLines: 3,
      }}
    />
  );
}
