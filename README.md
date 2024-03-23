# 使い方

以下のコマンドを打つ

docker compose build
docker compose up -d

api/tmpをディレクトリを削除してください
(こいつが最初からあるとエラーが出る。後日検証して修正します)

以下のコマンドでコンテナ内に入る
docker-compose exec front ash
npm install 
以下のコマンドでコンテナから出る
exit

コンテナを立て直す
docker compose up -d



# 使用されるポート

フロントエンド用。vueで作成したページが表示される。
localhost:80 

db用
localhost:5431

フロントエンドからdb操作する際に呼び出すapi用
localhost:3000

※すでに、上記のポートが使用中である場合はポートを開けてください。

# コンテナ(仮想環境)を終了する方法

以下のコマンドを打つ

docker-compose down
作成されたボリュームごと削除したい場合は-vのオプションを付けてください。

※dbの初期化からやり直したい場合はVueTest-Hideki\api\tmpディレクトリを削除する必要がある。


