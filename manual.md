# 【完全版】初心者向けGitHub入門ハンズオンチュートリアル 〜TaskManagerアプリ開発で学ぶ〜

このチュートリアルは、Git/GitHubの基本操作から、Webアプリのバージョン管理・公開・共同開発の基礎まで、初心者が迷わず実践できるようにステップバイステップで解説します。実際に「TaskManager」アプリを作りながら、現場で役立つ知識・コマンド・トラブル対処法まで網羅します。

---

## 目次
1. Git/GitHubとは？
2. 事前準備・環境構築
3. プロジェクトフォルダの作成
4. Gitの初期化
5. GitHubリポジトリの作成
6. リモートリポジトリの登録
7. ファイルの作成（HTML/CSS/JS）
8. 変更のステージングとコミット
9. GitHubへのプッシュ
10. READMEの作成とアップロード
11. コードの変更と再プッシュ
12. GitHubからのダウンロード・クローン・ファイル取得
13. ブランチの作成・切り替え・マージ
14. 変更履歴の確認・過去バージョンへの戻し方
15. よくあるトラブルと対処法
16. 便利Tips・用語集

---

## 1. Git/GitHubとは？
- **Git**: ファイルの変更履歴を管理できる分散型バージョン管理システム。
- **GitHub**: Gitリポジトリをインターネット上で共有・公開・共同編集できるサービス。
- プログラムだけでなく、ドキュメントやデザインファイルの管理にも活用されます。

## 2. 事前準備・環境構築
- Gitのインストール（`git --version`で確認）
- GitHubアカウント作成・ログイン
- ターミナル（macOS: Terminal, Windows: PowerShellやGit Bash）

## 3. プロジェクトフォルダの作成
```zsh
mkdir ~/projects/github/taskmanager
cd ~/projects/github/taskmanager
```

## 4. Gitの初期化
```zsh
git init
```

## 5. GitHubリポジトリの作成
1. [GitHub](https://github.com/)で「＋」→「New repository」
2. Repository nameに `taskmanager` と入力し「Create repository」

## 6. リモートリポジトリの登録
```zsh
git remote add origin https://github.com/ユーザー名/taskmanager.git
```

## 7. ファイルの作成（HTML/CSS/JS）
- `index.html`, `style.css`, `app.js` を作成（AIやエディタで雛形生成もOK）
- ファイルがプロジェクトフォルダに存在することを確認

## 8. 変更のステージングとコミット
```zsh
git add .
git commit -m "初回コミット: TaskManagerアプリの雛形作成"
```

## 9. GitHubへのプッシュ
```zsh
git branch -M main
git push -u origin main
```

## 10. READMEの作成とアップロード
1. `README.md` を作成（アプリ概要・特徴・使い方・ファイル構成など記載）
2. アップロード：
```zsh
git add README.md
git commit -m "README.md追加"
git push
```

## 11. コードの変更と再プッシュ

### 複数ファイルをまとめてコミット・プッシュしたい場合
- いくつかのファイルを同時に編集した場合、1つずつadd/commit/pushする必要はありません。
- すべての変更をまとめて以下のコマンドで一括反映できます。

```zsh
git add .
git commit -m "複数ファイルの変更をまとめてコミット"
git push
```

1. 例: `app.js` を編集し機能追加
2. 変更を保存後、
```zsh
git add app.js
git commit -m "app.js: タスク追加機能を実装"
git push
```

## 12. GitHubからのダウンロード・クローン・ファイル取得
### リポジトリごとクローン
```zsh
git clone https://github.com/ユーザー名/taskmanager.git
```
### 既存リポジトリを最新化
```zsh
git pull origin main
```
### 個別ファイルだけダウンロード
1. GitHubで該当ファイルを開き「Raw」→右クリック「名前を付けて保存」

## 13. ブランチの作成・切り替え・マージ
- **新しいブランチ作成**
```zsh
git checkout -b feature/新機能名
```
- **ブランチ切り替え**
```zsh
git checkout main
```
- **mainへマージ**
```zsh
git checkout main
git merge feature/新機能名
```

## 14. 変更履歴の確認・過去バージョンへの戻し方
- **履歴一覧**
```zsh
git log --oneline
```
- **特定ファイルの履歴**
```zsh
git log ファイル名
```
- **過去の状態に戻す（例: 1つ前のコミット）**
```zsh
git checkout HEAD^ ファイル名
```

## 15. よくあるトラブルと対処法
- **push時にエラーが出る場合**
  - `git pull --rebase origin main` で最新を取得してから再度 `git push`
- **リモートURLを間違えた場合**
  - `git remote set-url origin 新しいURL` で修正
- **コミットメッセージを間違えた場合**
  - 直前なら `git commit --amend` で修正
- **ファイルを間違って消した場合**
  - `git checkout HEAD -- ファイル名` で復元

## 16. 便利Tips・用語集
- **.gitignore**: Git管理対象外にしたいファイル・フォルダを記載
- **差分確認**: `git status`, `git diff`
- **リモートリポジトリ一覧**: `git remote -v`
- **GitHub PagesでWeb公開**: 設定→Pages→mainブランチを選択
- **Pull Request（PR）**: 複数人開発時のレビュー・マージ申請機能
- **Fork**: 他人のリポジトリを自分のアカウントにコピー
- **Issue**: バグ報告やタスク管理用のチケット

---

このチュートリアルに沿って進めれば、GitHubの基本から実践まで一通り体験できます。困ったときはAI（GitHub Copilot）や公式ドキュメントも活用しましょう！
