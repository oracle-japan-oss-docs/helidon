<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.12uTx8" title="原文 : Helidon MP OIDC Security Provider">Helidon MP OIDCセキュリティ・プロバイダ</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1Gyumo" title="原文 : This guide describes how to set up Keycloak and Helidon to secure an application with OIDC security provider.">このガイドでは、OIDCセキュリティ・プロバイダを使用してアプリケーションを保護するためにKeycloakおよびHelidonを設定する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.6"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.3yeiO0.1" title="原文 : For this 20 minute tutorial, you will need the following:">この20分間のチュートリアルでは、次のものが必要です:</span></p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1hKNxI.3" title="原文 : A Helidon {upper-case-flavor} Application">Helidon {upper-case-flavor} アプリケーション</span></td>
<td class=""><span class="merged" id="all.3jMlMY.3" title="原文 : You can use your own application or use the Helidon {upper-case-flavor} Quickstart to create a sample application.">独自のアプリケーションを使用するか、<a href="https://helidon.io/docs/v2/#/{lower-case-flavor}/guides/02_quickstart" id="" target="_blank" >「Helidon {upper-case-flavor} クイックスタート」</a>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UjXGj.4" title="原文 : Java&#160;SE&#160;11 (Open&#160;JDK&#160;11)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" id="" target="_blank" >Java&#160;SE&#160;11</a> (<a href="http://jdk.java.net" id="" target="_blank" >Open&#160;JDK&#160;11</a>)</span></td>
<td class=""><span class="merged" id="all.3e6V0X.4" title="原文 : Helidon requires Java 11+.">HelidonにはJava 11以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nyTbh.6" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" id="" target="_blank" >Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.4" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HtX9I.5"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" id="" target="_blank" >Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.4" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48aNQe.5"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1tjPJQ.4" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop).">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタ(<router-link to="/about/05_kubernetes">「デスクトップにインストール」</router-link>も可)が必要です。</span></td>
</tr>
</tbody>
</table>
</div>
<markup
lang="bash"
title="Verify Prerequisites"
>java -version
mvn --version
docker --version
kubectl version --short</markup>

<markup
lang="bash"
title="Setting JAVA_HOME"
># On Mac
export JAVA_HOME=`/usr/libexec/java_home -v 11`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-11</markup>

</div>

<h2 id="_introduction"><span class="merged" id="all.4LJMHk.2"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.roBF2.spl1" title="原文 : This guide describes the steps required to protect your whole application or a specific area with Open ID Connect (OIDC) security.">このガイドでは、アプリケーション全体またはOpen ID Connect (OIDC)セキュリティのある特定の領域を保護するために必要なステップについて説明します。</span> <span class="merged" id="all.roBF2.spl2" title="原文 : OIDC is a secure mechanism for an application to contact an identity service.">OIDCは、アプリケーションがアイデンティティ・サービスに接続するためのセキュアなメカニズムです。</span> <span class="merged" id="all.roBF2.spl3" title="原文 : Its built on top of OAuth 2.0 and provides full-fledged authentication and authorization protocols.">OAuth 2.0の上に構築され、フル・フレッジ認証および認可プロトコルが提供されます。</span> </p>

</div>

<h2 id="_install_keycloak"><span class="merged" id="all.117nO7" title="原文 : Install Keycloak">Keycloakのインストール</span></h2>
<div class="section">

<h4 id="_on_docker"><span class="merged" id="all.36l17N" title="原文 : On Docker">Dockerの場合</span></h4>
<div class="section">
<p><span class="merged" id="all.1Sks34" title="原文 : To install Keycloak with Docker, open a terminal and make sure the port 8080 is free.">KeycloakをDockerとともにインストールするには、端末を開き、ポート8080が空いていることを確認します。</span></p>

<markup
lang="bash"
title="Enter the following command"
>docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:11.0.2</markup>

<p><span class="merged" id="all.4FYwLw.spl1" title="原文 : This will start Keycloak on local port 8080.">これにより、ローカル・ポート8080でKeycloakが起動します。</span> <span class="merged" id="all.4FYwLw.spl2" title="原文 : It will create the admin user with username admin and password admin Feel free to modify 11.0.2 by any keycloak version of your wish.">ユーザー名<code>admin</code>およびパスワード<code>admin</code> で管理ユーザーを作成します。任意のKeycloakバージョンの11.0.2を自由に変更できます。</span> <span class="merged" id="all.4FYwLw.spl3" title="原文 : If you are running docker behind a proxy server, make sure it is either configured into docker or disabled.">プロキシ・サーバーの背後でdockerを実行している場合は、dockerに構成されているか、無効になっていることを確認します。</span> <span class="merged" id="all.4FYwLw.spl4" title="原文 : Otherwise, you might face a connection timeout because docker cannot download the required data.">そうしないと、dockerが必要なデータをダウンロードできないため、接続タイムアウトが発生する可能性があります。</span> </p>

<p><span class="merged" id="all.3Xww3q" title="原文 : To verify that Keycloak is running correctly, go to the admin console : http://localhost:8080/auth/admin Log in using the username and password mentioned above: admin.">Keycloakが正しく実行されていることを確認するには、管理コンソールに移動 : <a href="http://localhost:8080/auth/admin" id="" target="_blank" >http://localhost:8080/auth/admin</a>前述のユーザー名とパスワードを使用してログイン : <code>admin</code>。</span></p>

<p><span class="merged" id="all.1c2GfT" title="原文 : You should be logged in successfully, and it prompts the admin console.">正常にログインすると、管理コンソールが表示されます。</span></p>

</div>

<h4 id="_on_jdk"><span class="merged" id="all.3YAmaV" title="原文 : On JDK">JDKの場合</span></h4>
<div class="section">
<p><span class="merged" id="all.4Vzxqx.spl1" title="原文 : Download the last version of Keycloak from Keycloak website : https://www.keycloak.org/downloads In the table Server choose Standalone server distribution.">Keycloak webサイトから最後のバージョンのKeycloakをダウンロード : <a href="https://www.keycloak.org/downloads" id="" target="_blank" >https://www.keycloak.org/downloads</a>表のサーバーで、スタンドアロン・サーバー・ディストリビューションを選択します。</span> <span class="merged" id="all.4Vzxqx.spl2" title="原文 : ZIP or Tar format are available, click on either to download Keycloak.">ZIPまたはTar形式が使用可能です。いずれかをクリックしてKeycloakをダウンロードしてください。</span> </p>

<p><span class="merged" id="all.1fPOiV.spl1" title="原文 : After extracting the archive file, you should have a directory named keycloak followed by the version.">アーカイブ・ファイルを抽出すると、keycloakという名前のディレクトリが作成され、その後にバージョンが続きます。</span> <span class="merged" id="all.1fPOiV.spl2" title="原文 : For example, if you chose version 11.0.2, the folder must be named keycloak-11.0.2.">たとえば、バージョン11.0.2を選択した場合、フォルダの名前はkeycloak-11.0.2にする必要があります。</span> </p>

<p><span class="merged" id="all.2fhmvi" title="原文 : Open keycloak folder to make it your current directory.">keycloakフォルダを開き、現在のディレクトリにします。</span></p>

<markup
lang="bash"
title="Run this command from command prompt to open the directory:"
>cd keycloak-11.0.2</markup>

</div>

<h3 id="_start_keycloak"><span class="merged" id="all.1Wa2Zu" title="原文 : Start Keycloak">Keycloakの起動</span></h3>
<div class="section">
<p><span class="merged" id="all.2BnS3X" title="原文 : To start keycloak and have it ready for further steps, run the following command.">keycloakを起動し、それ以降のステップの準備を整えるには、次のコマンドを実行します。</span></p>

<markup
lang="bash"
title="On Linux run:"
>bin/standalone.sh</markup>

<markup
lang="bash"
title="On Windows run:"
>bin/standalone.bat</markup>

<p><span class="merged" id="all.2y6P0T" title="原文 : Keycloak runs on localhost:8080 by default.">Keycloakは、デフォルトでlocalhost:8080で実行されます。</span></p>

</div>

<h3 id="_create_an_admin_user"><span class="merged" id="all.2lwsBL" title="原文 : Create an Admin User">管理ユーザーの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.395d0i.spl1" title="原文 : You need to create an admin user because it does not come by default when installing Keycloak.">管理ユーザーは、Keycloakのインストール時にデフォルトでは提供されないため、作成する必要があります。</span> <span class="merged" id="all.395d0i.spl2" title="原文 : To do this, open http://localhost:8080/auth in your favorite browser.">これを行うには、お気に入りのブラウザで<a href="http://localhost:8080/auth" id="" target="_blank" >http://localhost:8080/auth</a>を開きます。</span> </p>

<p><span class="merged" id="all.4AEwRq.spl1" title="原文 : A window Welcome to Keycloak should be prompted.">ウィンドウ<code>Welcome to Keycloak</code>が表示されます。</span> <span class="merged" id="all.4AEwRq.spl2" title="原文 : If not, check if any error appear in the terminal.">そうでない場合は、端末にエラーが表示されているかどうかを確認します。</span> </p>

<p><span class="merged" id="all.1WXZz9.spl1" title="原文 : Fill the form by adding Username and Password.">UsernameおよびPasswordを追加してフォームに入力します。</span> <span class="merged" id="all.1WXZz9.spl2" title="原文 : Click on Create to create the admin user."><code>Create</code>をクリックして管理ユーザーを作成します。</span> </p>

<p><span class="merged" id="all.3CL3f8" title="原文 : Above Administration Console should be printed &quot;User created&quot; in a green rectangle.">管理コンソールの上に、緑色の矩形で「User created」と表示されます。</span></p>

<p><span class="merged" id="all.1Ytl6G.spl1" title="原文 : To check that the admin user was created correctly, click on Administration user which should redirect you to a Login form.">管理ユーザーが正しく作成されたことを確認するには、管理ユーザーをクリックして、ログイン・フォームにリダイレクトする必要があります。</span> <span class="merged" id="all.1Ytl6G.spl2" title="原文 : Enter the Username and Password created earlier to log in.">以前に作成したユーザー名とパスワードを入力してログインします。</span> </p>

<p><span class="merged" id="all.O5fWv" title="原文 : After successfully logged in, the admin console is prompted.">正常にログインすると、管理コンソールが表示されます。</span></p>

</div>
</div>

<h2 id="_set_up_keycloak"><span class="merged" id="all.LItef" title="原文 : Set up Keycloak">Keycloakの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.4Y2J9Z" title="原文 : To set up Keycloak properly, go to the admin console: http://localhost:8080/auth/admin">Keycloakを正しく設定するには、管理コンソールに移動 : <a href="http://localhost:8080/auth/admin" id="" target="_blank" >http://localhost:8080/auth/admin</a></span></p>

<p><span class="merged" id="all.1OVBF5.spl1" title="原文 : If you are using Docker, use Username admin and password admin as it is the default admin user.">Dockerを使用している場合は、ユーザー名<code>admin</code>およびパスワード<code>admin</code>をデフォルトの管理ユーザーとして使用します。</span> <span class="merged" id="all.1OVBF5.spl2" title="原文 : Otherwise, use the username and password you used to create the admin user.">それ以外の場合は、管理ユーザーの作成に使用したユーザー名とパスワードを使用します。</span> </p>


<h3 id="_create_a_realm"><span class="merged" id="all.3oYief"  title="原文:: Create a Realm">レルムの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.4Z08n6.spl1" title="原文 : A realm is the place where groups of applications, and their environment, can be created.">レルムは、アプリケーションのグループとその環境を作成できる場所です。</span> <span class="merged" id="all.4Z08n6.spl2" title="原文 : It gathers :">次のものが収集されます :</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1R7mQY" title="原文 : One or several applications">1つ以上のアプリケーション</span></p>

</li>
<li>
<p><span class="merged" id="all.2aVXxW" title="原文 : One or several users">1人以上のユーザー</span></p>

</li>
<li>
<p><span class="merged" id="all.1oVTaH"  title="原文:: Sessions">セッション</span></p>

</li>
<li>
<p><span class="merged" id="all.1XZ8Ie"  title="原文:: Events">イベント</span></p>

</li>
<li>
<p><span class="merged" id="all.4ROyTe" title="原文 : Clients and their scopes">クライアントとそのスコープ</span></p>

</li>
</ul>
<p><span class="merged" id="all.FBh6U.spl1" title="原文 : By default, there is a realm called Master.">デフォルトでは、<code>Master</code>というレルムがあります。</span> <span class="merged" id="all.FBh6U.spl2" title="原文 : It is used to manage Keycloak.">Keycloakの管理に使用されます。</span> <span class="merged" id="all.FBh6U.spl3" title="原文 : It is not recommended to associate your application with this realm as it could disturb Keycloak functioning.">Keycloakが機能しなくなる可能性があるため、アプリケーションをこのレルムに関連付けることはお薦めしません。</span> </p>

<p><span class="merged" id="all.Kwf0o" title="原文 : To create a new realm to manage your application:">アプリケーションを管理するための新しいレルムを作成するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1lg5Yh" title="原文 : Open Keycloak admin console http://localhost:8080/auth/admin.">Keycloak管理コンソール<a href="http://localhost:8080/auth/admin" id="" target="_blank" >http://localhost:8080/auth/admin</a>を開きます。</span>

</li>
<li>
<span class="merged" id="all.4XzEdY" title="原文 : Hover the mouse over the dropdown in the top-left corner where it says Master, and press Add realm."><code>Master</code>と表示されている左上隅のドロップダウンの上にマウスを置き、<code>Add realm</code>を押します。</span>

</li>
<li>
<span class="merged" id="all.4Hs6ex" title="原文 : Fill the form by adding the realm name, myRealm for example."><code>myRealm</code>などのレルム名を追加して、フォームに入力します。</span>

</li>
<li>
<span class="merged" id="all.2HsXmK" title="原文 : Click on Create to create the new realm."><code>Create</code>をクリックして、新しいレルムを作成します。</span>

</li>
</ol>
<p><span class="merged" id="all.1XQhiQ" title="原文 : To verify that your realm is created, on the top-left corner where it said Master previously should be now your realm name or myRealm is you followed the example.">レルムが作成されたことを確認するには、<code>Master</code>が以前にレルム名になったことを示す左上隅、または<code>myRealm</code>が例に従っていることを確認します。</span></p>

<p><span class="merged" id="all.3Crpb0.spl1" title="原文 : To switch from a realm to another, hover the realm name, and the other realm created appear in the dropdown.">レルムから別のレルムに切り替えるには、レルム名を重ねると、作成された他のレルムがドロップダウンに表示されます。</span> <span class="merged" id="all.3Crpb0.spl2" title="原文 : Click on any realm name to change the current realm.">現在のレルムを変更するには、任意のレルム名をクリックします。</span> <span class="merged" id="all.3Crpb0.spl3" title="原文 : Make sure all configuration or modification are saved before changing the current realm or be subject to lose your configuration.">現在のレルムを変更する前にすべての構成または変更が保存されていることを確認するか、構成が失われる可能性があります。</span> </p>

</div>

<h3 id="_create_a_user"><span class="merged" id="all.obRkg"  title="原文:: Create a User">ユーザーの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2g6fa3.spl1" title="原文 : Initially there are no users in a new realm.">最初は、新しいレルムにユーザーは存在しません。</span> <span class="merged" id="all.2g6fa3.spl2" title="原文 : An unlimited number of user can be created per realm.">レルムごとに作成できるユーザー数に制限はありません。</span> <span class="merged" id="all.2g6fa3.spl3" title="原文 : A realm contains resources such as client which can be accessed by users.">レルムには、ユーザーがアクセスできるクライアントなどのリソースが含まれます。</span> </p>

<p><span class="merged" id="all.1HBhfk"  title="原文: To create a new user:">新しいユーザーを作成するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3FY2vh" title="原文 : Open the Keycloak admin console: http://localhost:8080/auth/admin">Keycloak管理コンソールを開く : <a href="http://localhost:8080/auth/admin" id="" target="_blank" >http://localhost:8080/auth/admin</a></span>

</li>
<li>
<span class="merged" id="all.4FIX2F" title="原文 : Click on Users in the left menu">左側のメニューで<code>Users</code>をクリック</span>

</li>
<li>
<span class="merged" id="all.1UiAVR" title="原文 : Press Add user"><code>Add user</code>を押す</span>

</li>
<li>
<span class="merged" id="all.4MsFXQ" title="原文 : Fill the form (Username is the only mandatory field) with this value Username: myUser">フォーム(ユーザー名は唯一の必須フィールド)にこの値ユーザー名を入力: <code>myUser</code></span>

</li>
<li>
<span class="merged" id="all.3axGYC"  title="原文:: Click Save"><code>「保存」</code>をクリックします</span>

</li>
</ol>
<p><span class="merged" id="all.3qHBm4.spl1" title="原文 : A new user is just created but it needs a password to be able to login.">新しいユーザーが作成されますが、ログインするにはパスワードが必要です。</span> <span class="merged" id="all.3qHBm4.spl2" title="原文 : To initialize it, do this:">初期化するには、次の手順を実行します:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.mVGgz" title="原文 : Click on Credentials at the top of the page, under Myuser.">ページ上部の<code>Myuser</code>の下にある<code>Credentials</code>をクリックします。</span>

</li>
<li>
<span class="merged" id="all.2GKM3N" title="原文 : Fill Password and Password confirmation with the user password of your choice.">選択したユーザー・パスワードを<code>Password</code>および<code>Password confirmation</code>に入力します。</span>

</li>
<li>
<span class="merged" id="all.3FnRVv.spl1" title="原文 : If the Temporary field is set to ON, the user has to update password on next login."><code>Temporary</code>フィールドが<code>ON</code>に設定されている場合、ユーザーは次回ログイン時にパスワードを更新する必要があります。</span> <span class="merged" id="all.3FnRVv.spl2" title="原文 : Click ON to make it OFF and prevent it."><code>ON</code>をクリックして<code>OFF</code>にし、防止します。</span> 

</li>
<li>
<span class="merged" id="all.2RiHkE" title="原文 : Press Set Password."><code>Set Password</code>を押します。</span>

</li>
<li>
<span class="merged" id="all.3tJhwf.spl1" title="原文 : A pop-up window is popping off.">ポップアップ・ウィンドウが表示されています。</span> <span class="merged" id="all.3tJhwf.spl2" title="原文 : Click on Set Password to confirm the new password."><code>Set Password</code>をクリックして、新しいパスワードを確認します。</span> 

</li>
</ol>
<p><span class="merged" id="all.1nZz3" title="原文 : To verify that the new user is created correctly:">新規ユーザーが正しく作成されたことを確認するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3eOxrO" title="原文 : Open the Keycloak account console: http://localhost:8080/auth/realms/myRealm/account.">Keycloakアカウント・コンソールを開く : <a href="http://localhost:8080/auth/realms/myRealm/account" id="" target="_blank" >http://localhost:8080/auth/realms/myRealm/account</a>。</span>

</li>
<li>
<span class="merged" id="all.uX0Ag" title="原文 : Login with myUser and password chosen earlier.">前に選択した<code>myUser</code>およびパスワードでログインします。</span>

</li>
</ol>
<p><span class="merged" id="all.q3j6q" title="原文 : You should now be logged-in to the account console where users can manage their accounts.">これで、ユーザーがアカウントを管理できるアカウント・コンソールにログインしました。</span></p>

</div>

<h3 id="_create_a_client"><span class="merged" id="all.4esYak" title="原文 : Create a Client">クライアントの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.3bbsNV" title="原文 : To create your first client:">最初のクライアントを作成するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2j0hhx" title="原文 : Open the Keycloak admin console: http://localhost:8080/auth/admin.">Keycloak管理コンソールを開く : <a href="http://localhost:8080/auth/admin" id="" target="_blank" >http://localhost:8080/auth/admin</a>。</span>

</li>
<li>
<span class="merged" id="all.1UiDrh" title="原文 : Make sure the current realm is myRealm and not Master.">現在のレルムが<code>Master</code>ではなく<code>myRealm</code>であることを確認します。</span>

</li>
<li>
<span class="merged" id="all.35pbP0.spl1" title="原文 : Navigate to the left menu, into configure section, click on Clients.">左側のメニューに移動し、構成セクションで<code>Clients</code>をクリックします。</span> <span class="merged" id="all.35pbP0.spl2" title="原文 : This window displays a table with every client from the realm.">このウィンドウには、レルムのすべてのクライアントを含む表が表示されます。</span> 

</li>
<li>
<span class="merged" id="all.31GL8s" title="原文 : Click on Create."><code>Create</code>をクリックします。</span>

</li>
<li>
<span class="merged" id="all.3QDAaB" title="原文 : Fill the following:">次のように入力します:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4LAUIu" title="原文 : Client ID : myClientID"><code>Client ID</code> : <code>myClientID</code></span>

</li>
<li>
<span class="merged" id="all.2AhuPs" title="原文 : Client Protocol : openid-connect"><code>Client Protocol</code> : <code>openid-connect</code></span>

</li>
</ol>
</li>
<li>
<span class="merged" id="all.WVWul"  title="原文:: Press Save"><code>Save</code>を押します</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4IM99p" title="原文 : Modify Access type : confidential"><code>Access type</code>の変更 : <code>confidential</code></span>

</li>
<li>
<span class="merged" id="all.2jWrsI" title="原文 : Update Valid Redirect URIs : http://localhost:7987/*"><code>Valid Redirect URIs</code>の更新 : <a href="http://localhost:7987/*" id="" target="_blank" >http://localhost:7987/*</a></span>

</li>
<li>
<span class="merged" id="all.2eHxhF" title="原文 : Click on + to add the new URI."><code>+</code>をクリックして、新しいURIを追加します。</span>

</li>
</ol>
</li>
<li>
<span class="merged" id="all.IdHxL" title="原文 : Click on Save."><code>Save</code>をクリックします。</span>

</li>
</ol>
<p><span class="merged" id="all.3chMEZ.spl1" title="原文 : A new tab named Credentials is created."><code>Credentials</code>という名前の新しいタブが作成されます。</span> <span class="merged" id="all.3chMEZ.spl2" title="原文 : Click on it to access this new tab.">クリックすると、この新しいタブにアクセスします。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2DTnHH" title="原文 : Select Client Authenticator : Client ID and Secret"><code>Client Authenticator</code>の選択 : <code>Client ID and Secret</code></span></p>

</li>
<li>
<p><span class="merged" id="all.28ShKU" title="原文 : Click on generate secret to generate client secret."><code>generate secret</code>をクリックしてクライアント・シークレットを生成します。</span></p>

</li>
</ul>
<p><span class="merged" id="all.4EfaOI.spl1" title="原文 : Keycloak is now configured and ready.">Keycloakが構成され、準備ができました。</span> <span class="merged" id="all.4EfaOI.spl2" title="原文 : Keep keycloak running on your terminal and open a new tab to set up Helidon.">端末でkeycloakを実行したまま、新しいタブを開いてHelidonを設定します。</span> </p>

</div>
</div>

<h2 id="_set_up_helidon"><span class="merged" id="all.MbZxe" title="原文 : Set up Helidon">Helidonの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.1N5gm4.spl1" title="原文 : Use the Helidon MP Maven archetype to create a simple project.">Helidon MP Maven原型を使用して、単純なプロジェクトを作成します。</span> <span class="merged" id="all.1N5gm4.spl2" title="原文 : It will be used as an example to show how to set up Helidon.">Helidonの設定方法を示す例として使用されます。</span> <span class="merged" id="all.1N5gm4.spl3" title="原文 : Replace 2.5.4 by the latest helidon version."><code>2.5.4</code>を最新のhelidonバージョンに置き換えます。</span> <span class="merged" id="all.1N5gm4.spl4" title="原文 : It will download the quickstart project into the current directory.">クイックスタート・プロジェクトが現在のディレクトリにダウンロードされます。</span> </p>

<markup
lang="bash"
title="Run the Maven archetype"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=2.5.4 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-mp \
    -Dpackage=io.helidon.examples.quickstart.mp</markup>

<markup
lang="bash"
title="The project will be built and run from the helidon-quickstart-mp directory:"
>cd helidon-quickstart-mp</markup>


<h3 id="_update_project_dependencies"><span class="merged" id="all.1vG31d" title="原文 : Update Project Dependencies">プロジェクトの依存関係の更新</span></h3>
<div class="section">
<p><span class="merged" id="all.1uDD49" title="原文 : Update the pom.xml file and add the following Helidon dependency to the &lt;dependencies&gt; section.">pom.xmlファイルを更新し、次のHelidon依存関係を<code>&lt;dependencies></code>セクションに追加します。</span></p>

<markup
lang="xml"
title="Add the following dependency to <code>pom.xml</code>:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-oidc&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h3 id="_add_oidc_security_properties"><span class="merged" id="all.2P0F4E" title="原文 : Add OIDC Security Properties">OIDCセキュリティ・プロパティの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.4aFVT5.spl1" title="原文 : The OIDC security provider configuration can be joined to helidon configuration file.">OIDCセキュリティ・プロバイダ構成は、helidon構成ファイルに結合できます。</span> <span class="merged" id="all.4aFVT5.spl2" title="原文 : This file is located here: src/main/resources/application.yaml.">このファイルはここにあります: <code>src/main/resources/application.yaml</code>。</span> <span class="merged" id="all.4aFVT5.spl3" title="原文 : It can be easily used to configure the web server without modifying application code.">これを使用すると、アプリケーション・コードを変更せずにwebサーバーを簡単に構成できます。</span> </p>

<markup
lang="yaml"
title="Create application.yaml file and add the following line"
>security:
  providers:
    - abac:
      # Adds ABAC Provider - it does not require any configuration
    - oidc:
        redirect-uri: "/oidc/redirect"
        audience: "account"
        client-id: "myClientID"   <span class="conum" data-value="1" />
        header-use: true
        client-secret: "Client secret generated into Keycloak client credential"  <span class="conum" data-value="2" />
        identity-uri: "http://localhost:8080/auth/realms/myRealm"   <span class="conum" data-value="3" />
        frontend-uri: "http://localhost:7987"   <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1PCI18" title="原文 : client-id must be the same as the one configure in keycloak."><code>client-id</code>は、keycloakの構成と同じである必要があります。</span></li>
<li data-value="2"><span class="merged" id="all.3SRha6" title="原文 : The client secret generate by Keycloak during Create a client section."><code>Create a client</code>セクション中にKeycloakによって生成されるクライアント・シークレット。</span></li>
<li data-value="3"><span class="merged" id="all.19cQQp" title="原文 : identity-uri is used to redirect the user to keycloak."><code>identity-uri</code>を使用して、ユーザーをkeycloakにリダイレクトします。</span></li>
<li data-value="4"><span class="merged" id="all.4BDnum" title="原文 : frontend-uri will direct you back to the application."><code>frontend-uri</code>からアプリケーションに戻ります。</span></li>
</ul>
<p><span class="merged" id="all.25m60F.spl1" title="原文 : The client secret is the one generate into Keycloak Client Credentials.">クライアント・シークレットは、Keycloakクライアント資格証明に生成されるものです。</span> <span class="merged" id="all.25m60F.spl2" title="原文 : It must be copy past into client-id variable from application.yaml.">application.yamlから<code>client-id</code>変数に過去をコピーする必要があります。</span> </p>

<p><span class="merged" id="all.3BGqMt.spl1" title="原文 : Make sure keycloak and the application are not running on the same port.">keycloakとアプリケーションが同じポートで実行されていないことを確認してください。</span> <span class="merged" id="all.3BGqMt.spl2" title="原文 : The application port value can be changed into microprofile-config.properties.">アプリケーション・ポート値はmicroprofile-config.propertiesに変更できます。</span> </p>

<markup
lang="properties"
title="Change these properties to configure the server host and port"
>server.port=7987
server.host=localhost</markup>

<p><span class="merged" id="all.3YMaYM" title="原文 : If the port 7987 is already used, check what port is free on your machine.">ポート7987がすでに使用されている場合は、マシンの空きポートを確認します。</span></p>

<markup
lang="properties"
title="Replace the old port into microprofile-config.properties"
>server.port="{Your-new-port}"</markup>

<markup
lang="yaml"
title="Replace the old port into application.yaml"
>frontend-uri: "http://localhost:{Your-new-port}"</markup>

</div>

<h3 id="_secure_your_application"><span class="merged" id="all.vZG7T"  title="原文:: Secure Your Application">アプリケーションの保護</span></h3>
<div class="section">
<p><span class="merged" id="all.qwNIZ.spl1" title="原文 : The GreetResource class is a JAX-RS resource available at the endpoint /greet."><code>GreetResource</code>クラスは、エンドポイント<code>/greet</code>で使用可能なJAX-RSリソースです。</span> <span class="merged" id="all.qwNIZ.spl2" title="原文 : Use @Authenticated annotation to protect any method or endpoint."><code>@Authenticated</code>注釈を使用して、メソッドまたはエンドポイントを保護します。</span> <span class="merged" id="all.qwNIZ.spl3" title="原文 : Modify the getDefaultMessage method with the @Authenticated to limit its access."><code>@Authenticated</code>を使用して<code>getDefaultMessage</code>メソッドを変更し、アクセスを制限します。</span> </p>

<markup
lang="java"
title="Import <code>Authenticated</code> annotation:"
>import io.helidon.security.annotations.Authenticated;</markup>

<markup
lang="java"
title="Add <code>@Authenticated</code> to secure <code>getDefaultMessage</code>"
>    @Authenticated
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public JsonObject getDefaultMessage() {
        return createResponse("World");
    }</markup>

<p><span class="merged" id="all.10Cqy3.spl1" title="原文 : When a client will send an HTTP GET request at the endpoint http://localhost:7987/greet, he will be redirected to keycloak.">クライアントがエンドポイント<code><a href="http://localhost:7987/greet" id="" target="_blank" >http://localhost:7987/greet</a></code>でHTTP GETリクエストを送信すると、keycloakにリダイレクトされます。</span> <span class="merged" id="all.10Cqy3.spl2" title="原文 : Keycloak will check if the client has the required authorisation to access this endpoint.">Keycloakは、このエンドポイントへのアクセスに必要な認可がクライアントにあるかどうかを確認します。</span> <span class="merged" id="all.10Cqy3.spl3" title="原文 : If the client can log in successfully, keycloak redirect it to the wished endpoint.">クライアントが正常にログインできる場合、keycloakはそれを目的のエンドポイントにリダイレクトします。</span> <span class="merged" id="all.10Cqy3.spl4" title="原文 : If the client cannot log in, or the required access data are incomplete, Keycloak refuses the access.">クライアントがログインできない場合、または必要なアクセス・データが不完全な場合、Keycloakはアクセスを拒否します。</span> </p>

</div>
</div>

<h2 id="_try_it"><span class="merged" id="all.SAuTz"  title="原文:: Try it!">試行!</span></h2>
<div class="section">
<p><span class="merged" id="all.3EC6WT" title="原文 : Helidon and Keycloak are now correctly configured and your application is safe.">HelidonおよびKeycloakが正しく構成され、アプリケーションが安全です。</span></p>

<markup
lang="bash"
title="Build the application, skipping unit tests, then run it:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-mp.jar</markup>

<p><span class="merged" id="all.m9Yi5.spl1" title="原文 : The tests must be skipped, otherwise it produces test failure.">テストをスキップする必要があります。スキップしないと、テストが失敗します。</span> <span class="merged" id="all.m9Yi5.spl2" title="原文 : As the /greet endpoint for GET request is now protected, its access is limited, and the tests are not built to take oidc security in account.">GETリクエストの<code>/greet</code>エンドポイントは現在保護されているため、そのアクセスは制限され、テストはoidcセキュリティを考慮して構築されません。</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2LrRPN" title="原文 : Open your favourite browser and try to access http://localhost:7987/greet/Michael.">お気に入りのブラウザを開き、<code><a href="http://localhost:7987/greet/Michael" id="" target="_blank" >http://localhost:7987/greet/Michael</a></code>にアクセスしてみます。</span>

</li>
<li>
<span class="merged" id="all.AFxEP" title="原文 : You should not be redirected and receive greeting from the application.">リダイレクトされず、アプリケーションからグリーティングを受信する必要があります。</span>

</li>
<li>
<span class="merged" id="all.1fMhc0" title="原文 : Enter the following into URL : http://localhost:7987/greet.">URLに次のように入力 : <code><a href="http://localhost:7987/greet" id="" target="_blank" >http://localhost:7987/greet</a></code>。</span>

</li>
<li>
<span class="merged" id="all.13z3WT" title="原文 : Keycloak redirect you to its login page.">Keycloakによって、そのログイン・ページにリダイレクトされます。</span>

</li>
<li>
<span class="merged" id="all.1i02Hl" title="原文 : Enter the username and associated password:">ユーザー名および関連するパスワードを入力してください:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1YyUAu" title="原文 : Username : myUser"><code>Username</code> : <code>myUser</code></span>

</li>
<li>
<span class="merged" id="all.1WmPM4" title="原文 : Password: password"><code>Password</code>: <code>password</code></span>

</li>
</ol>
</li>
<li>
<span class="merged" id="all.3VOAyN" title="原文 : After successful log in, keycloak redirect you to the http://localhost:7987/greet endpoint and print Hello word.">ログインに成功すると、keycloakによって<code><a href="http://localhost:7987/greet" id="" target="_blank" >http://localhost:7987/greet</a></code>エンドポイントにリダイレクトされ、Helloワードが出力されます。</span>

</li>
<li>
<span class="merged" id="all.2sjcTx" title="原文 : Press Ctrl+C to stop the application."><code>Ctrl+C</code>を押してアプリケーションを停止します。</span>

</li>
</ol>
<p><span class="merged" id="all.2fcTTt" title="原文 : From the actual settings, the user needs to log in only once, then Keycloak saves all the connection data.">実際の設定からは、ユーザーがログインする必要があるのは一度だけです。その後、Keycloakはすべての接続データを保存します。</span></p>


<h3 id="_update_tests_to_the_secure_environment"><span class="merged" id="all.293ols" title="原文 : Update Tests to the Secure Environment">セキュアな環境へのテストの更新</span></h3>
<div class="section">
<p><span class="merged" id="all.3rkY4G.spl1" title="原文 : At this stage of the application, tests cannot pass because of OIDC security.">アプリケーションのこの段階では、OIDCセキュリティのためにテストに合格できません。</span> <span class="merged" id="all.3rkY4G.spl2" title="原文 : The only way to authenticate a user is through the front end of that server which can be accessed with the browser for example.">ユーザーを認証する唯一の方法は、たとえばブラウザを使用してアクセスできるそのサーバーのフロント・エンドを介して行うことです。</span> </p>

<p><span class="merged" id="all.3IRcPd.spl1" title="原文 : In order to keep security and test the application locally, a new security provider must be provided.">セキュリティを維持し、アプリケーションをローカルでテストするには、新しいセキュリティ・プロバイダを提供する必要があります。</span> <span class="merged" id="all.3IRcPd.spl2" title="原文 : By adding specific configuration to the test, it is possible to override the application configuration.">テストに特定の構成を追加することで、アプリケーション構成をオーバーライドできます。</span> </p>

<p><span class="merged" id="all.PsDoG.spl1" title="原文 : The following explains how to set a basic authentication instead of oidc security provider only for the tests.">次に、テスト専用のoidcセキュリティ・プロバイダのかわりに基本認証を設定する方法について説明します。</span> <span class="merged" id="all.PsDoG.spl2" title="原文 : Which means, at the end of this guide, the application will be secured by oidc and the tests will use basic authentication.">つまり、このガイドの最後では、アプリケーションはoidcによって保護され、テストは基本認証を使用します。</span> </p>

<p><span class="merged" id="all.473JMq" title="原文 : In the test folder helidon-quickstart-mp/src/test:">テスト・フォルダ<code>helidon-quickstart-mp/src/test</code>で、次の手順を実行します:</span></p>

<markup
lang="bash"
title="Create a new directory and another one inside"
>mkdir resources
cd resources
touch application.yaml</markup>

<p><span class="merged" id="all.255rpw" title="原文 : Open the application.yaml file you just created.">作成したapplication.yamlファイルを開きます。</span></p>

<markup
lang="yaml"
title="Copy these properties into the new application.yaml"
>app:
  greeting: "Hello"

server:
  port: 7987
  host: localhost

security:
  providers:
    - abac:
    - http-basic-auth:
        users:
          - login: "jack"
            password: "jackIsGreat"</markup>

<p><span class="merged" id="all.3XdaSu.spl1" title="原文 : By adding this new application.yaml, it will append the properties to the application.yaml located into java/resources.">この新しいapplication.yamlを追加すると、<code>java/resources</code>にあるapplication.yamlにプロパティが追加されます。</span> <span class="merged" id="all.3XdaSu.spl2" title="原文 : The oidc properties are not overridden, and the server cannot decide which security provider to choose.">oidcプロパティはオーバーライドされず、サーバーは選択するセキュリティ・プロバイダを決定できません。</span> </p>

<p><span class="merged" id="all.i1nJ5" title="原文 : Excluding oidc dependency during the test leaves only basic authentication security available for the tests.">テスト中にoidc依存関係を除外すると、テストで使用可能な基本認証セキュリティのみが残されます。</span></p>

<markup
lang="xml"
title="Add this plugin to the build"
>&lt;plugin&gt;
    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
    &lt;artifactId&gt;maven-surefire-plugin&lt;/artifactId&gt;
    &lt;configuration&gt;
        &lt;classpathDependencyExcludes&gt;
            &lt;classpathDependencyExclude&gt;io.helidon.microprofile:helidon-microprofile-oidc&lt;/classpathDependencyExclude&gt;
        &lt;/classpathDependencyExcludes&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;</markup>

<p><span class="merged" id="all.3D3j0R" title="原文 : In the MainTest.java file, tests need to be modified to check the application security when accessing /greet path with a GET method."><code>MainTest.java</code>ファイルで、<code>GET</code>メソッドを使用して<code>/greet</code>パスにアクセスするときにアプリケーション・セキュリティをチェックするようにテストを変更する必要があります。</span></p>

<p><span class="merged" id="all.1dPZHt" title="原文 : First step is to configure the server with the new application.yaml.">最初のステップは、新しいapplication.yamlでサーバーを構成することです。</span></p>

<markup
lang="java"
title="Import the Config class"
>import io.helidon.config.Config;</markup>

<markup
lang="java"
title="Replace the startTheServer method by this one:"
>@BeforeAll
    public static void startTheServer() {
        server = Server.builder()
                .config(Config.create())
                .build()
                .start();
        serverUrl = "http://localhost:" + server.port();
    }</markup>

<p><span class="merged" id="all.1d4CVN.spl1" title="原文 : The server has now one security provider, basic authentication configured.">サーバーには、基本認証が構成された1つのセキュリティ・プロバイダがあります。</span> <span class="merged" id="all.1d4CVN.spl2" title="原文 : Next step is to modify the test to check that the application is correctly protected.">次のステップでは、アプリケーションが正しく保護されていることを確認するためにテストを変更します。</span> </p>

<markup
lang="java"
title="Replace the JsonObject declaration into testHelloWorld method by this code:"
>JsonObject jsonObject;
Response response = client
        .target(serverUrl)
        .path("/greet")
        .request()
        .get(Response.class);

Assertions.assertEquals(401, response.getStatus());</markup>

<p><span class="merged" id="all.jcCGV.spl1" title="原文 : This piece of code uses the webclient to access the application on /greet path with a GET method.">このコード部分では、webclientを使用して、<code>GET</code>メソッドで<code>/greet</code>パス上のアプリケーションにアクセスします。</span> <span class="merged" id="all.jcCGV.spl2" title="原文 : The http basic authentication security provider protects this path, so the client should receive an HTTP 401 code for unauthorized.">http basic認証セキュリティ・プロバイダはこのパスを保護するため、クライアントは権限のないHTTP 401コードを受信する必要があります。</span> </p>

<p><span class="merged" id="all.3aRBni" title="原文 : Only jack user has access to this part of the application."><code>jack</code>ユーザーのみがアプリケーションのこの部分にアクセスできます。</span></p>

<markup
lang="java"
title="Add new check to the testHelloWorld method:"
>String encoding = Base64.getEncoder().encodeToString("jack:jackIsGreat".getBytes());

jsonObject = client
        .target(serverUrl)
        .path("/greet")
        .request()
        .header(Http.Header.AUTHORIZATION, "Basic " + encoding)
        .get(JsonObject.class);

Assertions.assertEquals("Hello World!", jsonObject.getString("message"),
                "default message");</markup>

<p><span class="merged" id="all.3vRloG.spl1" title="原文 : The username and password are encoded and placed inside the header in order to authenticate as jack to access the application.">ユーザー名とパスワードは、アプリケーションにアクセスするためのjackとして認証されるように、ヘッダー内にエンコードされて配置されます。</span> <span class="merged" id="all.3vRloG.spl2" title="原文 : If the authentication is successful, the application send the Hello World back as a JsonObject.">認証が成功すると、アプリケーションは<code>Hello World</code>を<code>JsonObject</code>として返送します。</span> </p>

<p><span class="merged" id="all.baE0r" title="原文 : Now, the project can be build without skiping test.">これで、テストをスキップせずにプロジェクトをビルドできます。</span></p>

<markup
lang="bash"
title="Build the project"
>mvn clean install</markup>

</div>

<h3 id="_test_keycloak_process_with_postman"><span class="merged" id="all.3dpPF2" title="原文 : Test Keycloak process with Postman">PostmanによるKeycloakプロセスのテスト</span></h3>
<div class="section">
<p><span class="merged" id="all.2f8JRJ.spl1" title="原文 : Keycloak supports many authentication and authorization flows, but only two of them will be shown.">Keycloakは多くの認証および認可フローをサポートしていますが、それらのうち2つだけが表示されます。</span> <span class="merged" id="all.2f8JRJ.spl2" title="原文 : This section describes another way you can get an access token or refresh a token or identity token.">この項では、アクセス・トークンを取得したり、トークンまたはアイデンティティ・トークンをリフレッシュする別の方法について説明します。</span> <span class="merged" id="all.2f8JRJ.spl3" title="原文 : The identity token contains information about the user.">アイデンティティ・トークンには、ユーザーに関する情報が含まれます。</span> <span class="merged" id="all.2f8JRJ.spl4" title="原文 : The access token contains access information that the application can use to determine what resources the user is allowed to access.">アクセス・トークンには、ユーザーがアクセスを許可されているリソースを決定するためにアプリケーションが使用できるアクセス情報が含まれます。</span> <span class="merged" id="all.2f8JRJ.spl5" title="原文 : Once expired, the refresh token allows the application to obtain a new access token.">期限切れになると、リフレッシュ・トークンによって、アプリケーションは新しいアクセス・トークンを取得できます。</span> <span class="merged" id="all.2f8JRJ.spl6" title="原文 : As these tokens contain sensitive information, they are valid for a very short period.">これらのトークンには機密情報が含まれているため、非常に短い期間有効です。</span> <span class="merged" id="all.2f8JRJ.spl7" title="原文 : It is possible to make them last longer in order to let you manipulate them with Postman.">ポスト・マンで操作できるように、それらを長くすることができます。</span> <span class="merged" id="all.2f8JRJ.spl8"  title="原文:: To do so:">そのように行うには:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3Hoxx8" title="原文 : Open the Postman Console.">Postmanコンソールを開きます。</span>

</li>
<li>
<span class="merged" id="all.1skPGX" title="原文 : Click on the Realm Setting in the left menu.">左側のメニューで<code>Realm Setting</code>をクリックします。</span>

</li>
<li>
<span class="merged" id="all.1YhRPp.spl1" title="原文 : Navigate to the Tokens tab."><code>Tokens</code>タブにナビゲートします。</span> <span class="merged" id="all.1YhRPp.spl2" title="原文 : You can increase the access token lifespan.">アクセス・トークンの存続期間を増やすことができます。</span> 

</li>
</ol>

<h4 id="_authorization_code_flow"><span class="merged" id="all.1XimQd" title="原文 : Authorization Code Flow">認可コード・フロー</span></h4>
<div class="section">
<p><span class="merged" id="all.3ue6Dp.spl1" title="原文 : The Authorization Code flow is suitable for browser-based applications.">認可コード・フローは、ブラウザベースのアプリケーションに適しています。</span> <span class="merged" id="all.3ue6Dp.spl2" title="原文 : It is composed of three main steps:">次の3つの主なステップで構成されています:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.ZrzjP.spl1" title="原文 : The browser visits the application.">ブラウザがアプリケーションにアクセスします。</span> <span class="merged" id="all.ZrzjP.spl2" title="原文 : The user is not logged in, so it redirects the browser to Keycloak which requires username and password for authentication.">ユーザーはログインしていないため、認証にユーザー名とパスワードが必要なブラウザをKeycloakにリダイレクトします。</span> 

</li>
<li>
<span class="merged" id="all.mSdbO" title="原文 : Keycloak authenticates the user and returns a temporary authorization code as a query parameter in the URL.">Keycloakはユーザーを認証し、URLの問合せパラメータとして一時認可コードを返します。</span>

</li>
<li>
<span class="merged" id="all.2wtzn" title="原文 : The authorization code is used to get access and refresh token from Keycloak token endpoint.">認可コードは、Keycloakトークン・エンドポイントからアクセスおよびリフレッシュ・トークンを取得するために使用されます。</span>

</li>
</ol>
<p><span class="merged" id="all.3bEl6T.spl1" title="原文 : For the first step, paste the following URL into your browser: http://localhost:8080/auth/realms/myRealm/protocol/openid-connect/auth?client_id=myClientID&amp;response_type=code.">最初のステップでは、次のURLをブラウザに貼り付けます : <code><a href="http://localhost:8080/auth/realms/myRealm/protocol/openid-connect/auth?client_id=myClientID&amp;response_type=code" id="" target="_blank" >http://localhost:8080/auth/realms/myRealm/protocol/openid-connect/auth?client_id=myClientID&amp;response_type=code</a></code>。</span> <span class="merged" id="all.3bEl6T.spl2" title="原文 : The first part of the url http:/../auth is the Keycloak endpoint to request an authorization code.">URL <code>http:/../auth</code>の最初の部分は、認可コードをリクエストするKeycloakエンドポイントです。</span> <span class="merged" id="all.3bEl6T.spl3" title="原文 : Two query parameters are provided, the client id and the response type.">クライアントIDとレスポンス・タイプの2つの問合せパラメータが用意されています。</span> <span class="merged" id="all.3bEl6T.spl4" title="原文 : Press enter and Keycloak responds with different URL containing a query parameter code.">Enterキーを押すと、問合せパラメータ<code>code</code>を含む別のURLでKeycloakが応答します。</span> <span class="merged" id="all.3bEl6T.spl5" title="原文 : You successfully received the authorization code.">認可コードが正常に受信されました。</span> </p>

<p><span class="merged" id="all.3c2gl2.spl1" title="原文 : In order to achieve the third step, we can use Postman to exchange the authorization code for tokens.">3番目のステップを達成するために、Postmanを使用してトークンに対する認可コードを交換できます。</span> <span class="merged" id="all.3c2gl2.spl2" title="原文 : In Postman, select the Http POST method.">Postmanで、HTTP POSTメソッドを選択します。</span> <span class="merged" id="all.3c2gl2.spl3" title="原文 : Keycloak endpoint to get token is the following: http://localhost:8080/auth/realms/myRealm/protocol/openid-connect/token.">トークンを取得するKeycloakエンドポイントは次のとおりです : <code><a href="http://localhost:8080/auth/realms/myRealm/protocol/openid-connect/token" id="" target="_blank" >http://localhost:8080/auth/realms/myRealm/protocol/openid-connect/token</a></code>。</span> <span class="merged" id="all.3c2gl2.spl4" title="原文 : In the body of the request, select x-www-form-urlencoded type.">リクエストの本文で、<code>x-www-form-urlencoded</code>タイプを選択します。</span> <span class="merged" id="all.3c2gl2.spl5" title="原文 : Add the following data:">次のデータを追加します:</span> </p>

<markup
lang="json"
title="Enter the key:value"
>[{"key":"grant_type","value":"authorization_code"},
{"key":"client_id","value":"myClientID"},
{"key":"client_secret","value":"client secret"},
{"key":"code","value":"authorization code"}]</markup>

<p><span class="merged" id="all.OrlRX.spl1" title="原文 : Do not forget to replace the client secret by its value (generated during Create a Client), and authorization code by the code value in the query parameter."><code>client secret</code>をその値(クライアントの作成中に生成)で置換し、<code>authorization code</code>を問合せパラメータのコード値で置換することを忘れないでください。</span> <span class="merged" id="all.OrlRX.spl2" title="原文 : Send the request by pressing Send."><code>Send</code>を押してリクエストを送信します。</span> <span class="merged" id="all.OrlRX.spl3" title="原文 : Keycloak returns an access token and a refresh token.">Keycloakはアクセス・トークンとリフレッシュ・トークンを返します。</span> </p>

</div>

<h4 id="_resource_owner_password_credentials_grant_direct_access_grants"><span class="merged" id="all.4TiMSc" title="原文 : Resource Owner Password Credentials Grant (Direct Access Grants)">リソース所有者のパスワード資格証明の付与(直接アクセス権限)</span></h4>
<div class="section">
<p><span class="merged" id="all.HOqJT.spl1" title="原文 : The Direct Access Grants flow is used by REST clients that want to request tokens on behalf of a user.">直接アクセス付与フローは、ユーザーにかわってトークンをリクエストするRESTクライアントで使用されます。</span> <span class="merged" id="all.HOqJT.spl2" title="原文 : To use Postman to make this request on behalf of myuser, select the GET method and enter this URL: http://localhost:7987/greet/.">Postmanを使用して<code>myuser</code>のかわりにこのリクエストを実行するには、GETメソッドを選択し、このURLを入力 : <code><a href="http://localhost:7987/greet/" id="" target="_blank" >http://localhost:7987/greet/</a></code>。</span> <span class="merged" id="all.HOqJT.spl3" title="原文 : Under Authorization tab, select authorization type`OAuth 2.0`."><code>Authorization</code>タブで、認可タイプ`OAuth 2.0`を選択します。</span> <span class="merged" id="all.HOqJT.spl4" title="原文 : Under it, complete the sentence Add authorization data to with Request Headers, and complete the required fields.">下で、文<code>Add authorization data to</code>に<code>Request Headers</code>を入力し、必要なフィールドに入力します。</span> </p>

<markup
lang="json"
title="Enter the following information:"
>[{"key":"Header Prefix","value":"bearer"},
{"key":"Grant type","value":"Password  Credentials"},
{"key":"Access Token URL","value":"http://localhost:8080/auth/realms/myRealm/protocol/openid-connect/token"},
{"key":"Client ID","value":"myClientID"},
{"key":"Client Secret","value":"client secret"},
{"key":"Username","value":"myuser"},
{"key":"Password","value":"password"},
{"key":"Scope","value":"openid"},
{"key":"Client Authentication","value":"Send as Basic Auth Header"}]</markup>

<p><span class="merged" id="all.3x5xKf.spl1" title="原文 : Again, make sure to replace client secret by the actual client secret.">再度、<code>client secret</code>を実際のクライアント・シークレットで置き換えてください。</span> <span class="merged" id="all.3x5xKf.spl2" title="原文 : Click on Get New Access Token."><code>Get New Access Token</code>をクリックします。</span> <span class="merged" id="all.3x5xKf.spl3" title="原文 : A popup window appears with Authentication complete, click on proceed to display access, refresh and identity token.">認証が完了したポップアップ・ウィンドウが表示されます。クリックしてアクセス、リフレッシュおよびアイデンティティ・トークンを表示します。</span> <span class="merged" id="all.3x5xKf.spl4" title="原文 : Copy and paste the access token to Access Token field and press Send.">アクセス・トークンをコピーして<code>Access Token</code>フィールドに貼り付け、<code>Send</code>を押します。</span> <span class="merged" id="all.3x5xKf.spl5" title="原文 : Helidon greeting application sends back Hello World !.">Helidonグリーティング・アプリケーションは、<code>Hello World !</code>を返します。</span> </p>

</div>
</div>

<h3 id="_restrict_access_to_a_specific_role"><span class="merged" id="all.2aQryx" title="原文 : Restrict Access to a Specific Role">アクセスを特定のロールに制限</span></h3>
<div class="section">
<p><span class="merged" id="all.3FrQOH.spl1" title="原文 : To give less access to a specific endpoint, it is possible to configure user role.">特定のエンドポイントへのアクセス権を減らすために、ユーザー・ロールを構成できます。</span> <span class="merged" id="all.3FrQOH.spl2" title="原文 : So the application will grant access only the user with the required role.">そのため、アプリケーションでは、必要なロールを持つユーザーにのみアクセス権が付与されます。</span> </p>

<p><span class="merged" id="all.2pR2fM" title="原文 : Navigate to the GreetResource and find the getDefaultMessage with @Authenticate annotation.">GreetResourceに移動し、<code>getDefaultMessage</code> with @Authenticate注釈を見つけます。</span></p>

<markup
lang="java"
title="Import the RolesAllowed annotation"
>import javax.annotation.security.RolesAllowed;</markup>

<markup
lang="java"
title="Add the @RolesAllowed annotation under the @Authenticate annotation:"
>@RolesAllowed("admin")</markup>

<p><span class="merged" id="all.24m5Jn.spl1" title="原文 : The annotation parameter is the role with access to the method.">注釈パラメータは、メソッドにアクセスできるロールです。</span> <span class="merged" id="all.24m5Jn.spl2" title="原文 : In this case, only user with admin role can have access.">この場合、管理ロールを持つユーザーのみがアクセスできます。</span> </p>

<p><span class="merged" id="all.3wNA2n" title="原文 : Then, add a user and roles to the helidon-quickstart-mp/src/test/resources/application.yaml file.">次に、ユーザーおよびロールを<code>helidon-quickstart-mp/src/test/resources/application.yaml</code>ファイルに追加します。</span></p>

<markup
lang="yaml"
title="Add jack roles and create a new user named john:"
>- http-basic-auth:
        users:
          - login: "jack"
            password: "jackIsGreat"
            roles: [ "admin", "user" ]
          - login: "john"
            password: "johnPassword"
            roles: [ "user" ]</markup>

<p><span class="merged" id="all.3s3rla.spl1" title="原文 : Now, only Jack has access to secure endpoint as he has an admin role.">Jackのみが<code>admin</code>ロールを持つため、セキュアなエンドポイントにアクセスできるようになりました。</span> <span class="merged" id="all.3s3rla.spl2" title="原文 : Jhon, as a simple user, can not access it.">Jhonは、単純なユーザーとしてアクセスできません。</span> <span class="merged" id="all.3s3rla.spl3" title="原文 : Once it is done, go to the tests to check the application behavior.">完了したら、テストに移動してアプリケーションの動作を確認します。</span> <span class="merged" id="all.3s3rla.spl4" title="原文 : The test from previous section is still passing because jack has access.">jackにアクセス権があるため、前のセクションのテストに合格しています。</span> </p>

<p><span class="merged" id="all.31DqI6" title="原文 : The user john has only the user role so when accessing protected endpoint, a 403 (Forbidden) http code is returned.">ユーザー<code>john</code>には<code>user</code>ロールのみがあるため、保護されたエンドポイントにアクセスすると、403 (禁止) httpコードが返されます。</span></p>

<markup
lang="java"
title="Check that jhon does not have access"
>encoding = Base64.getEncoder().encodeToString("john:johnPassword".getBytes());

response = client
        .target(serverUrl)
        .path("/greet")
        .request()
        .header(Http.Header.AUTHORIZATION, "Basic " + encoding)
        .get(Response.class);

Assertions.assertEquals(403, response.getStatus());</markup>

<markup
lang="bash"
title="Build the project"
>mvn clean install</markup>

<p><span class="merged" id="all.13ydNA" title="原文 : The tests pass, and your application is secured with specific roles in addition to user IDs.">テストに合格し、アプリケーションはユーザーIDに加えて特定のロールで保護されます。</span></p>

</div>
</div>
</doc-view>
