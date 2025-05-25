# GitHub × TaskManagerアプリ開発 ハンズオンマニュアル

このマニュアルは、シンプルなタスク管理アプリ（HTML, CSS, JavaScriptの3ファイル構成）を作成し、そのコードをGitHubのリポジトリにプッシュ・管理する一連の基本操作を、初心者でも迷わず実践できるようにステップバイステップで解説します。

---

## 目次
1. 事前準備
2. プロジェクトフォルダの作成
3. Gitの初期化
4. GitHubリポジトリの作成
5. リモートリポジトリの登録
6. ファイルの作成（HTML/CSS/JS）
7. 変更のステージングとコミット
8. GitHubへのプッシュ
9. コードの変更と再プッシュ
10. よくあるトラブルと対処法

---

## 1. 事前準備
- Gitがインストールされていることを確認します。
  - ターミナルで `git --version` を実行し、バージョンが表示されればOK。
- GitHubアカウントを作成しておきます。
- GitHubにログインしておきます。

## 2. プロジェクトフォルダの作成
```zsh
mkdir ~/projects/github/taskmanager
cd ~/projects/github/taskmanager
```

## 3. Gitの初期化
```zsh
git init
```

## 4. GitHubリポジトリの作成
1. [GitHub](https://github.com/)にアクセスし、右上の「＋」→「New repository」をクリック。
2. Repository nameに `taskmanager` と入力。
3. 「Create repository」をクリック。

## 5. リモートリポジトリの登録
GitHubで作成したリポジトリのURL（例: `https://github.com/ユーザー名/taskmanager.git`）をコピーし、以下のコマンドを実行。
```zsh
git remote add origin https://github.com/ユーザー名/taskmanager.git
```

## 6. ファイルの作成（HTML/CSS/JS）
- ここでAI（GitHub Copilot）に `index.html`, `style.css`, `app.js` の3ファイルの雛形を生成してもらいましょう。
- 生成後、3ファイルがプロジェクトフォルダに存在することを確認します。

## 7. 変更のステージングとコミット
```zsh
git add .
git commit -m "初回コミット: TaskManagerアプリの雛形作成"
```

## 8. GitHubへのプッシュ
```zsh
git branch -M main
git push -u origin main
```

## 9. コードの変更と再プッシュ
1. 例えば `app.js` を編集し、機能を追加します。
2. 変更を保存したら、以下のコマンドでGitHubに反映します。
```zsh
git add app.js
git commit -m "app.js: タスク追加機能を実装"
git push
```

## 10. よくあるトラブルと対処法
- **push時にエラーが出る場合**
  - `git pull --rebase origin main` で最新を取得してから再度 `git push`。
- **リモートURLを間違えた場合**
  - `git remote set-url origin 新しいURL` で修正。
- **コミットメッセージを間違えた場合**
  - 直前なら `git commit --amend` で修正。

---

この手順に沿って進めれば、GitHubの基本操作を一通り体験できます。各ステップで不明点があれば、AI（GitHub Copilot）に質問してください。
