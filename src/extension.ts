'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { AnsibleCompletionItemProvider } from './completion-item-provider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const triggerCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(['ansible', 'yaml'], new AnsibleCompletionItemProvider(), ...triggerCharacters));
}

// this method is called when your extension is deactivated
export function deactivate() {
}
