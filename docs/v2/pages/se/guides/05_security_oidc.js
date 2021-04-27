<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3CpyOK" title="原文 : Helidon SE OIDC Security Provider Guide">Helidon SE OIDCセキュリティ・プロバイダ・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.QIjRt" title="原文 : This guide describes how to set up Keycloak and Helidon to secure your application with OIDC security provider.">このガイドでは、OIDCセキュリティ・プロバイダを使用してアプリケーションを保護するためにKeycloakおよびHelidonを設定する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.mQ2U1.11"  title="原文:: What you need">必要事項</span></h2>
<div class="section">

<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.41roYO.2" title="原文 : About 20 minutes">約20分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.27GIMH.17" title="原文 : Helidon Prerequisites"><router-link to="/about/03_prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
</tbody>
</table>
</div>
<ul class="ulist">
<li>
<p><span class="merged" id="all.Yv6Sn.1" title="原文 : Keycloak Installation"><router-link @click.native="this.scrollFix('#_keycloak_installation')" to="#_keycloak_installation">Keycloakのインストール</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26qo8T.1" title="原文 : Set up Keycloak"><router-link @click.native="this.scrollFix('#_set_up_keycloak')" to="#_set_up_keycloak">Keycloakの設定</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3A2sL4.1" title="原文 : Set up Helidon"><router-link @click.native="this.scrollFix('#_set_up_helidon')" to="#_set_up_helidon">Helidonの設定</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.13FZ2S.1" title="原文 : Restrict access to a specific role"><router-link @click.native="this.scrollFix('#_restrict_access_to_a_specific_role')" to="#_restrict_access_to_a_specific_role">特定のロールへのアクセスの制限</router-link></span></p>

</li>
</ul>

<h3 id="_keycloak_installation"><span class="merged" id="all.47XsKo.1" title="原文 : Keycloak Installation">Keycloakのインストール</span></h3>
<div class="section">

<h4 id="_on_docker"><span class="merged" id="all.36l17N.1" title="原文 : On Docker">Dockerの場合</span></h4>
<div class="section">
<p><span class="merged" id="all.1Sks34.1" title="原文 : To install Keycloak with Docker, open a terminal and make sure the port 8080 is free.">KeycloakをDockerとともにインストールするには、端末を開き、ポート8080が空いていることを確認します。</span></p>

<markup
lang="bash"
title="次のコマンドを入力"
>docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:11.0.2</markup>

<p><span class="merged" id="all.4FYwLw.1.spl1" title="原文 : This will start Keycloak on local port 8080.">これにより、ローカル・ポート8080でKeycloakが起動します。</span> <span class="merged" id="all.4FYwLw.1.spl2" title="原文 : It will create the admin user with username admin and password admin Feel free to modify 11.0.2 by any keycloak version of your wish.">ユーザー名<code>admin</code>およびパスワード<code>admin</code> で管理ユーザーを作成します。任意のKeycloakバージョンの11.0.2を自由に変更できます。</span> <span class="merged" id="all.4FYwLw.1.spl3" title="原文 : If you are running docker behind a proxy server, make sure it is either configured into docker or disabled.">プロキシ・サーバーの背後でdockerを実行している場合は、dockerに構成されているか、無効になっていることを確認します。</span> <span class="merged" id="all.4FYwLw.1.spl4" title="原文 : Otherwise, you might face a connection timeout because docker cannot download the required data.">そうしないと、dockerが必要なデータをダウンロードできないため、接続タイムアウトが発生する可能性があります。</span> </p>

<p><span class="merged" id="all.3Xww3q.1" title="原文 : To verify that Keycloak is running correctly, go to the admin console : http://localhost:8080/auth/admin Log in using the username and password mentioned above: admin.">Keycloakが正しく実行されていることを確認するには、管理コンソールに移動 : <a href="http://localhost:8080/auth/admin" id="" target="_blank" >http://localhost:8080/auth/admin</a>前述のユーザー名とパスワードを使用してログイン : <code>admin</code>。</span></p>

<p><span class="merged" id="all.1c2GfT.1" title="原文 : You should be logged in successfully, and it prompts the admin console.">正常にログインすると、管理コンソールが表示されます。</span></p>

</div>

<h4 id="_on_jdk"><span class="merged" id="all.3YAmaV.1" title="原文 : On JDK">JDKの場合</span></h4>
<div class="section">
<p><span class="merged" id="all.4Vzxqx.1.spl1" title="原文 : Download the last version of Keycloak from Keycloak website : https://www.keycloak.org/downloads In the table Server choose Standalone server distribution.">Keycloak webサイトから最後のバージョンのKeycloakをダウンロード : <a href="https://www.keycloak.org/downloads" id="" target="_blank" >https://www.keycloak.org/downloads</a>表のサーバーで、スタンドアロン・サーバー・ディストリビューションを選択します。</span> <span class="merged" id="all.4Vzxqx.1.spl2" title="原文 : ZIP or Tar format are available, click on either to download Keycloak.">ZIPまたはTar形式が使用可能です。いずれかをクリックしてKeycloakをダウンロードしてください。</span> </p>

<p><span class="merged" id="all.1fPOiV.1.spl1" title="原文 : After extracting the archive file, you should have a directory named keycloak followed by the version.">アーカイブ・ファイルを抽出すると、keycloakという名前のディレクトリが作成され、その後にバージョンが続きます。</span> <span class="merged" id="all.1fPOiV.1.spl2" title="原文 : For example, if you chose version 11.0.2, the folder must be named keycloak-11.0.2.">たとえば、バージョン11.0.2を選択した場合、フォルダの名前はkeycloak-11.0.2にする必要があります。</span> </p>

<p><span class="merged" id="all.2fhmvi.1" title="原文 : Open keycloak folder to make it your current directory.">keycloakフォルダを開き、現在のディレクトリにします。</span></p>

<markup
lang="bash"
title="コマンド・プロンプトから次のコマンドを実行して、ディレクトリを開きます:"
>cd keycloak-11.0.2</markup>


<h5 id="_start_keycloak"><span class="merged" id="all.1Wa2Zu.1" title="原文 : Start Keycloak">Keycloakの起動</span></h5>
<div class="section">
<p><span class="merged" id="all.2BnS3X.1" title="原文 : To start keycloak and have it ready for further steps, run the following command.">keycloakを起動し、それ以降のステップの準備を整えるには、次のコマンドを実行します。</span></p>

<markup
lang="bash"
title="Linuxでは、次を実行します:"
>bin/standalone.sh</markup>

<markup
lang="bash"
title="Windowsでは次のコマンドを実行します:"
>bin/standalone.bat</markup>

<p><span class="merged" id="all.2y6P0T.1" title="原文 : Keycloak runs on localhost:8080 by default.">Keycloakは、デフォルトでlocalhost:8080で実行されます。</span></p>

</div>

<h5 id="_create_an_admin_user"><span class="merged" id="all.2CNwrJ.1" title="原文 : Create an admin user">管理ユーザーの作成</span></h5>
<div class="section">
<p><span class="merged" id="all.395d0i.1.spl1" title="原文 : You need to create an admin user because it does not come by default when installing Keycloak.">管理ユーザーは、Keycloakのインストール時にデフォルトでは提供されないため、作成する必要があります。</span> <span class="merged" id="all.395d0i.1.spl2" title="原文 : To do this, open http://localhost:8080/auth in your favorite browser.">これを行うには、お気に入りのブラウザで<a href="http://localhost:8080/auth" id="" target="_blank" >http://localhost:8080/auth</a>を開きます。</span> </p>

<p><span class="merged" id="all.4AEwRq.1.spl1" title="原文 : A window Welcome to Keycloak should be prompted.">ウィンドウ<code>Welcome to Keycloak</code>が表示されます。</span> <span class="merged" id="all.4AEwRq.1.spl2" title="原文 : If not, check if any error appear in the terminal.">そうでない場合は、端末にエラーが表示されているかどうかを確認します。</span> </p>

<p><span class="merged" id="all.1WXZz9.1.spl1" title="原文 : Fill the form by adding Username and Password.">UsernameおよびPasswordを追加してフォームに入力します。</span> <span class="merged" id="all.1WXZz9.1.spl2" title="原文 : Click on Create to create the admin user."><code>Create</code>をクリックして管理ユーザーを作成します。</span> </p>

<p><span class="merged" id="all.3CL3f8.1" title="原文 : Above Administration Console should be printed &quot;User created&quot; in a green rectangle.">管理コンソールの上に、緑色の矩形で「User created」と表示されます。</span></p>

<p><span class="merged" id="all.1Ytl6G.1.spl1" title="原文 : To check that the admin user was created correctly, click on Administration user which should redirect you to a Login form.">管理ユーザーが正しく作成されたことを確認するには、管理ユーザーをクリックして、ログイン・フォームにリダイレクトする必要があります。</span> <span class="merged" id="all.1Ytl6G.1.spl2" title="原文 : Enter the Username and Password created earlier to log in.">以前に作成したユーザー名とパスワードを入力してログインします。</span> </p>

<p><span class="merged" id="all.O5fWv.1" title="原文 : After successfully logged in, the admin console is prompted.">正常にログインすると、管理コンソールが表示されます。</span></p>

</div>
</div>
</div>

<h3 id="_set_up_keycloak"><span class="merged" id="all.LItef.1" title="原文 : Set up Keycloak">Keycloakの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.4Y2J9Z.1" title="原文 : To set up Keycloak properly, go to the admin console: http://localhost:8080/auth/admin">Keycloakを正しく設定するには、管理コンソールに移動 : <a href="http://localhost:8080/auth/admin" id="" target="_blank" >http://localhost:8080/auth/admin</a></span></p>

<p><span class="merged" id="all.1OVBF5.1.spl1" title="原文 : If you are using Docker, use Username admin and password admin as it is the default admin user.">Dockerを使用している場合は、ユーザー名<code>admin</code>およびパスワード<code>admin</code>をデフォルトの管理ユーザーとして使用します。</span> <span class="merged" id="all.1OVBF5.1.spl2" title="原文 : Otherwise, use the username and password you used to create the admin user.">それ以外の場合は、管理ユーザーの作成に使用したユーザー名とパスワードを使用します。</span> </p>


<h4 id="_create_a_realm"><span class="merged" id="all.Jz23p.1"  title="原文:: Create a realm">レルムの作成</span></h4>
<div class="section">
<p><span class="merged" id="all.4Z08n6.1.spl1" title="原文 : A realm is the place where groups of applications, and their environment, can be created.">レルムは、アプリケーションのグループとその環境を作成できる場所です。</span> <span class="merged" id="all.4Z08n6.1.spl2" title="原文 : It gathers :">次のものが収集されます :</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1R7mQY.1" title="原文 : One or several applications">1つ以上のアプリケーション</span></p>

</li>
<li>
<p><span class="merged" id="all.2aVXxW.1" title="原文 : One or several users">1人以上のユーザー</span></p>

</li>
<li>
<p><span class="merged" id="all.1oVTaH.1"  title="原文:: Sessions">セッション</span></p>

</li>
<li>
<p><span class="merged" id="all.1XZ8Ie.1"  title="原文:: Events">イベント</span></p>

</li>
<li>
<p><span class="merged" id="all.4ROyTe.1" title="原文 : Clients and their scopes">クライアントとそのスコープ</span></p>

</li>
</ul>
<p><span class="merged" id="all.FBh6U.1.spl1" title="原文 : By default, there is a realm called Master.">デフォルトでは、<code>Master</code>というレルムがあります。</span> <span class="merged" id="all.FBh6U.1.spl2" title="原文 : It is used to manage Keycloak.">Keycloakの管理に使用されます。</span> <span class="merged" id="all.FBh6U.1.spl3" title="原文 : It is not recommended to associate your application with this realm as it could disturb Keycloak functioning.">Keycloakが機能しなくなる可能性があるため、アプリケーションをこのレルムに関連付けることはお薦めしません。</span> </p>

<p><span class="merged" id="all.Kwf0o.1" title="原文 : To create a new realm to manage your application:">アプリケーションを管理するための新しいレルムを作成するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1lg5Yh.1" title="原文 : Open Keycloak admin console http://localhost:8080/auth/admin.">Keycloak管理コンソール<a href="http://localhost:8080/auth/admin" id="" target="_blank" >http://localhost:8080/auth/admin</a>を開きます。</span>

</li>
<li>
<span class="merged" id="all.4XzEdY.1" title="原文 : Hover the mouse over the dropdown in the top-left corner where it says Master, and press Add realm."><code>Master</code>と表示されている左上隅のドロップダウンの上にマウスを置き、<code>Add realm</code>を押します。</span>

</li>
<li>
<span class="merged" id="all.4Hs6ex.1" title="原文 : Fill the form by adding the realm name, myRealm for example."><code>myRealm</code>などのレルム名を追加して、フォームに入力します。</span>

</li>
<li>
<span class="merged" id="all.2HsXmK.1" title="原文 : Click on Create to create the new realm."><code>Create</code>をクリックして、新しいレルムを作成します。</span>

</li>
</ol>
<p><span class="merged" id="all.1XQhiQ.1" title="原文 : To verify that your realm is created, on the top-left corner where it said Master previously should be now your realm name or myRealm is you followed the example.">レルムが作成されたことを確認するには、<code>Master</code>が以前にレルム名になったことを示す左上隅、または<code>myRealm</code>が例に従っていることを確認します。</span></p>

<p><span class="merged" id="all.3Crpb0.1.spl1" title="原文 : To switch from a realm to another, hover the realm name, and the other realm created appear in the dropdown.">レルムから別のレルムに切り替えるには、レルム名を重ねると、作成された他のレルムがドロップダウンに表示されます。</span> <span class="merged" id="all.3Crpb0.1.spl2" title="原文 : Click on any realm name to change the current realm.">現在のレルムを変更するには、任意のレルム名をクリックします。</span> <span class="merged" id="all.3Crpb0.1.spl3" title="原文 : Make sure all configuration or modification are saved before changing the current realm or be subject to lose your configuration.">現在のレルムを変更する前にすべての構成または変更が保存されていることを確認するか、構成が失われる可能性があります。</span> </p>

</div>

<h4 id="_create_a_user"><span class="merged" id="all.2ZgCmS.1"  title="原文:: Create a user">ユーザーを作成します</span></h4>
<div class="section">
<p><span class="merged" id="all.2g6fa3.1.spl1" title="原文 : Initially there are no users in a new realm.">最初は、新しいレルムにユーザーは存在しません。</span> <span class="merged" id="all.2g6fa3.1.spl2" title="原文 : An unlimited number of user can be created per realm.">レルムごとに作成できるユーザー数に制限はありません。</span> <span class="merged" id="all.2g6fa3.1.spl3" title="原文 : A realm contains resources such as client which can be accessed by users.">レルムには、ユーザーがアクセスできるクライアントなどのリソースが含まれます。</span> </p>

<p><span class="merged" id="all.1HBhfk.1"  title="原文: To create a new user:">新しいユーザーを作成するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3FY2vh.1" title="原文 : Open the Keycloak admin console: http://localhost:8080/auth/admin">Keycloak管理コンソールを開く : <a href="http://localhost:8080/auth/admin" id="" target="_blank" >http://localhost:8080/auth/admin</a></span>

</li>
<li>
<span class="merged" id="all.4FIX2F.1" title="原文 : Click on Users in the left menu">左側のメニューで<code>Users</code>をクリック</span>

</li>
<li>
<span class="merged" id="all.1UiAVR.1" title="原文 : Press Add user"><code>Add user</code>を押す</span>

</li>
<li>
<span class="merged" id="all.4MsFXQ.1" title="原文 : Fill the form (Username is the only mandatory field) with this value Username: myUser">フォーム(ユーザー名は唯一の必須フィールド)にこの値ユーザー名を入力: <code>myUser</code></span>

</li>
<li>
<span class="merged" id="all.3axGYC.1"  title="原文:: Click Save"><code>「保存」</code>をクリックします</span>

</li>
</ol>
<p><span class="merged" id="all.3qHBm4.1.spl1" title="原文 : A new user is just created but it needs a password to be able to login.">新しいユーザーが作成されますが、ログインするにはパスワードが必要です。</span> <span class="merged" id="all.3qHBm4.1.spl2" title="原文 : To initialize it, do this:">初期化するには、次の手順を実行します:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.mVGgz.1" title="原文 : Click on Credentials at the top of the page, under Myuser.">ページ上部の<code>Myuser</code>の下にある<code>Credentials</code>をクリックします。</span>

</li>
<li>
<span class="merged" id="all.2GKM3N.1" title="原文 : Fill Password and Password confirmation with the user password of your choice.">選択したユーザー・パスワードを<code>Password</code>および<code>Password confirmation</code>に入力します。</span>

</li>
<li>
<span class="merged" id="all.3FnRVv.1.spl1" title="原文 : If the Temporary field is set to ON, the user has to update password on next login."><code>Temporary</code>フィールドが<code>ON</code>に設定されている場合、ユーザーは次回ログイン時にパスワードを更新する必要があります。</span> <span class="merged" id="all.3FnRVv.1.spl2" title="原文 : Click ON to make it OFF and prevent it."><code>ON</code>をクリックして<code>OFF</code>にし、防止します。</span> 

</li>
<li>
<span class="merged" id="all.2RiHkE.1" title="原文 : Press Set Password."><code>Set Password</code>を押します。</span>

</li>
<li>
<span class="merged" id="all.3tJhwf.1.spl1" title="原文 : A pop-up window is popping off.">ポップアップ・ウィンドウが表示されています。</span> <span class="merged" id="all.3tJhwf.1.spl2" title="原文 : Click on Set Password to confirm the new password."><code>Set Password</code>をクリックして、新しいパスワードを確認します。</span> 

</li>
</ol>
<p><span class="merged" id="all.1nZz3.1" title="原文 : To verify that the new user is created correctly:">新規ユーザーが正しく作成されたことを確認するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3IYhz2" title="原文 : Open the Keycloak account console: http://localhost:8080/auth/realms/myRealm/account.">Keycloakアカウント・コンソールを開く : <code><a href="http://localhost:8080/auth/realms/myRealm/account" id="" target="_blank" >http://localhost:8080/auth/realms/myRealm/account</a></code>。</span>

</li>
<li>
<span class="merged" id="all.uX0Ag.1" title="原文 : Login with myUser and password chosen earlier.">前に選択した<code>myUser</code>およびパスワードでログインします。</span>

</li>
</ol>
<p><span class="merged" id="all.q3j6q.1" title="原文 : You should now be logged-in to the account console where users can manage their accounts.">これで、ユーザーがアカウントを管理できるアカウント・コンソールにログインしました。</span></p>

</div>

<h4 id="_create_a_client"><span class="merged" id="all.4esYak.1" title="原文 : Create a Client">クライアントの作成</span></h4>
<div class="section">
<p><span class="merged" id="all.3bbsNV.1" title="原文 : To create your first client:">最初のクライアントを作成するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2j0hhx.1" title="原文 : Open the Keycloak admin console: http://localhost:8080/auth/admin.">Keycloak管理コンソールを開く : <a href="http://localhost:8080/auth/admin" id="" target="_blank" >http://localhost:8080/auth/admin</a>。</span>

</li>
<li>
<span class="merged" id="all.1UiDrh.1" title="原文 : Make sure the current realm is myRealm and not Master.">現在のレルムが<code>Master</code>ではなく<code>myRealm</code>であることを確認します。</span>

</li>
<li>
<span class="merged" id="all.35pbP0.1.spl1" title="原文 : Navigate to the left menu, into configure section, click on Clients.">左側のメニューに移動し、構成セクションで<code>Clients</code>をクリックします。</span> <span class="merged" id="all.35pbP0.1.spl2" title="原文 : This window displays a table with every client from the realm.">このウィンドウには、レルムのすべてのクライアントを含む表が表示されます。</span> 

</li>
<li>
<span class="merged" id="all.31GL8s.1" title="原文 : Click on Create."><code>Create</code>をクリックします。</span>

</li>
<li>
<span class="merged" id="all.3QDAaB.1" title="原文 : Fill the following:">次のように入力します:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4LAUIu.1" title="原文 : Client ID : myClientID"><code>Client ID</code> : <code>myClientID</code></span>

</li>
<li>
<span class="merged" id="all.2AhuPs.1" title="原文 : Client Protocol : openid-connect"><code>Client Protocol</code> : <code>openid-connect</code></span>

</li>
</ol>
</li>
<li>
<span class="merged" id="all.WVWul.1"  title="原文:: Press Save"><code>Save</code>を押します</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4IM99p.1" title="原文 : Modify Access type : confidential"><code>Access type</code>の変更 : <code>confidential</code></span>

</li>
<li>
<span class="merged" id="all.2jWrsI.1" title="原文 : Update Valid Redirect URIs : http://localhost:7987/*"><code>Valid Redirect URIs</code>の更新 : <a href="http://localhost:7987/*" id="" target="_blank" >http://localhost:7987/*</a></span>

</li>
<li>
<span class="merged" id="all.2eHxhF.1" title="原文 : Click on + to add the new URI."><code>+</code>をクリックして、新しいURIを追加します。</span>

</li>
</ol>
</li>
<li>
<span class="merged" id="all.IdHxL.1" title="原文 : Click on Save."><code>Save</code>をクリックします。</span>

</li>
</ol>
<p><span class="merged" id="all.3chMEZ.1.spl1" title="原文 : A new tab named Credentials is created."><code>Credentials</code>という名前の新しいタブが作成されます。</span> <span class="merged" id="all.3chMEZ.1.spl2" title="原文 : Click on it to access this new tab.">クリックすると、この新しいタブにアクセスします。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2DTnHH.1" title="原文 : Select Client Authenticator : Client ID and Secret"><code>Client Authenticator</code>の選択 : <code>Client ID and Secret</code></span></p>

</li>
<li>
<p><span class="merged" id="all.28ShKU.1" title="原文 : Click on generate secret to generate client secret."><code>generate secret</code>をクリックしてクライアント・シークレットを生成します。</span></p>

</li>
</ul>
<p><span class="merged" id="all.4EfaOI.1.spl1" title="原文 : Keycloak is now configured and ready.">Keycloakが構成され、準備ができました。</span> <span class="merged" id="all.4EfaOI.1.spl2" title="原文 : Keep keycloak running on your terminal and open a new tab to set up Helidon.">端末でkeycloakを実行したまま、新しいタブを開いてHelidonを設定します。</span> </p>

</div>
</div>

<h3 id="_set_up_helidon"><span class="merged" id="all.MbZxe.1" title="原文 : Set up Helidon">Helidonの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3p1gEq.spl1" title="原文 : Use the Helidon SE Maven archetype to create a simple project.">Helidon SE Maven原型を使用して、単純なプロジェクトを作成します。</span> <span class="merged" id="all.3p1gEq.spl2" title="原文 : It will be used as an example to show how to set up Helidon.">Helidonの設定方法を示す例として使用されます。</span> <span class="merged" id="all.3p1gEq.spl3" title="原文 : Replace 2.2.1-SNAPSHOT by the latest helidon version."><code>2.2.1-SNAPSHOT</code>を最新のhelidonバージョンに置き換えます。</span> <span class="merged" id="all.3p1gEq.spl4" title="原文 : It will download the quickstart project into the current directory.">クイックスタート・プロジェクトが現在のディレクトリにダウンロードされます。</span> </p>

<markup
lang="bash"
title="Maven原型の実行"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=2.2.1-SNAPSHOT \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

<markup
lang="bash"
title="プロジェクトはhelidon-quickstart-seディレクトリからビルドおよび実行されます:"
>cd helidon-quickstart-se</markup>


<h4 id="_update_project_dependencies"><span class="merged" id="all.1yMOPq.1" title="原文 : Update project dependencies">プロジェクト依存関係の更新</span></h4>
<div class="section">
<p><span class="merged" id="all.1uDD49.1" title="原文 : Update the pom.xml file and add the following Helidon dependency to the &lt;dependencies&gt; section.">pom.xmlファイルを更新し、次のHelidon依存関係を<code>&lt;dependencies></code>セクションに追加します。</span></p>

<markup
lang="xml"
title="次の依存性を<code>pom.xml</code>に追加します:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-oidc&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h4 id="_add_oidc_security_properties"><span class="merged" id="all.4IgswY.1" title="原文 : Add OIDC security properties">OIDCセキュリティ・プロパティの追加</span></h4>
<div class="section">
<p><span class="merged" id="all.4aFVT5.1.spl1" title="原文 : The OIDC security provider configuration can be joined to helidon configuration file.">OIDCセキュリティ・プロバイダ構成は、helidon構成ファイルに結合できます。</span> <span class="merged" id="all.4aFVT5.1.spl2" title="原文 : This file is located here: src/main/resources/application.yaml.">このファイルはここにあります: <code>src/main/resources/application.yaml</code>。</span> <span class="merged" id="all.4aFVT5.1.spl3" title="原文 : It can be easily used to configure the web server without modifying application code.">これを使用すると、アプリケーション・コードを変更せずにwebサーバーを簡単に構成できます。</span> </p>

<markup
lang="yaml"
title="次の行をapplication.yamlに追加"
>security:
  providers:
  - abac:
      # Adds ABAC Provider - it does not require any configuration
  - oidc:
      client-id: "myClientID" <span class="conum" data-value="1" />
      client-secret: "Client secret generated into Keycloak client credential" <span class="conum" data-value="2" />
      identity-uri: "http://localhost:8080/auth/realms/myRealm" <span class="conum" data-value="3" />
      audience: "account"
      # proxy-host should be defined if you operate behind a proxy, can be removed otherwise
      proxy-host: ""
      frontend-uri: "http://localhost:7987" <span class="conum" data-value="4" />
      server-type: "oidc"
  web-server:
    # protected paths on the web server
    paths:  <span class="conum" data-value="5" />
      - path: "/greet"
        methods: ["get"]
        authenticate: true</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1PCI18.1" title="原文 : client-id must be the same as the one configure in keycloak."><code>client-id</code>は、keycloakの構成と同じである必要があります。</span></li>
<li data-value="2"><span class="merged" id="all.3SRha6.1" title="原文 : The client secret generate by Keycloak during Create a client section."><code>Create a client</code>セクション中にKeycloakによって生成されるクライアント・シークレット。</span></li>
<li data-value="3"><span class="merged" id="all.19cQQp.1" title="原文 : identity-uri is used to redirect the user to keycloak."><code>identity-uri</code>を使用して、ユーザーをkeycloakにリダイレクトします。</span></li>
<li data-value="4"><span class="merged" id="all.4BDnum.1" title="原文 : frontend-uri will direct you back to the application."><code>frontend-uri</code>からアプリケーションに戻ります。</span></li>
<li data-value="5"><span class="merged" id="all.4MWcgw" title="原文 : paths section defines the protected application&rsquo;s path."><code>paths</code>セクションでは、保護されたアプリケーションのパスを定義します。</span></li>
</ul>
<p><span class="merged" id="all.4axhc7.spl1" title="原文 : Make sure keycloak and the application are not running on the same port.">keycloakとアプリケーションが同じポートで実行されていないことを確認してください。</span> <span class="merged" id="all.4axhc7.spl2" title="原文 : The application port value can be changed into application.yaml.">アプリケーション・ポート値はapplication.yamlに変更できます。</span> </p>

<markup
lang="yaml"
title="これらのプロパティを変更して、サーバーのホストとポートを構成"
>server:
  port: 7987
  host: localhost</markup>

<p><span class="merged" id="all.3YMaYM.1" title="原文 : If the port 7987 is already used, check what port is free on your machine.">ポート7987がすでに使用されている場合は、マシンの空きポートを確認します。</span></p>

<markup
lang="yaml"
title="古いポートをapplication.yamlに交換"
>server:
  port: "{Your-new-port}"

...

frontend-uri: "http://localhost:{Your-new-port}"</markup>

</div>

<h4 id="_configure_web_server"><span class="merged" id="all.2rCZNZ" title="原文 : Configure web server">webサーバーの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.1kzZI9.spl1" title="原文 : Once the properties are added, the web server must be set up.">プロパティを追加したら、webサーバーを設定する必要があります。</span> <span class="merged" id="all.1kzZI9.spl2" title="原文 : The Main.createRouting method gather all configuration properties."><code>Main.createRouting</code>メソッドは、すべての構成プロパティを収集します。</span> </p>

<markup
lang="java"
title="<code>Main.createRouting</code>メソッドに次を追加"
>import io.helidon.security.Security;
import io.helidon.security.integration.webserver.WebSecurity;
import io.helidon.security.providers.oidc.OidcSupport;
...
Security security = Security.create(config.get("security"));    <span class="conum" data-value="1" />

return Routing.builder()
                .register(WebSecurity.create(security, config.get("security"))) <span class="conum" data-value="2" />
                .register(OidcSupport.create(config))   <span class="conum" data-value="3" />
                ...</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2QNnpH" title="原文 : Create the Helidon Security instance using configuration.">構成を使用してHelidon <code>Security</code>インスタンスを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.OvEnm" title="原文 : Register Helidon WebSecurity instance using security instance and configuration.">セキュリティ・インスタンスおよび構成を使用して、Helidon <code>WebSecurity</code>インスタンスを登録します。</span></li>
<li data-value="3"><span class="merged" id="all.2FVLGD" title="原文 : Register Helidon OidcSupport instance.">Helidon <code>OidcSupport</code>インスタンスを登録します。</span></li>
</ul>
<p><span class="merged" id="all.4deMdd.spl1" title="原文 : That code is extracting security properties from application.yaml into two steps.">このコードは、セキュリティ・プロパティをapplication.yamlから2つのステップに抽出しています。</span> <span class="merged" id="all.4deMdd.spl2" title="原文 : First the Security instance is used to bootstrap security, so the WebSecurity instance can integrate security into Web Server.">まず、セキュリティ・インスタンスを使用してセキュリティをブートストラップし、WebSecurityインスタンスがセキュリティをWebサーバーに統合できるようにします。</span> <span class="merged" id="all.4deMdd.spl3" title="原文 : Then, OidcSupport instance registers the endpoint to which OIDC redirects browser after a successful login.">次に、OidcSupportインスタンスは、ログイン成功後にOIDCがブラウザをリダイレクトするエンドポイントを登録します。</span> </p>

<p><span class="merged" id="all.3pVXL4" title="原文 : Helidon sample is now set up and ready.">これで、Helidonサンプルが設定され、準備が整いました。</span></p>

</div>

<h4 id="_try_it"><span class="merged" id="all.4Mibtz.1" title="原文 : Try it !">試してみましょう。</span></h4>
<div class="section">
<markup
lang="bash"
title="ユニット・テストをスキップしてアプリケーションをビルドし、実行します:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-se.jar</markup>

<p><span class="merged" id="all.m9Yi5.1.spl1" title="原文 : The tests must be skipped, otherwise it produces test failure.">テストをスキップする必要があります。スキップしないと、テストが失敗します。</span> <span class="merged" id="all.m9Yi5.1.spl2" title="原文 : As the /greet endpoint for GET request is now protected, its access is limited, and the tests are not built to take oidc security in account.">GETリクエストの<code>/greet</code>エンドポイントは現在保護されているため、そのアクセスは制限され、テストはoidcセキュリティを考慮して構築されません。</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2LrRPN.1" title="原文 : Open your favourite browser and try to access http://localhost:7987/greet/Michael.">お気に入りのブラウザを開き、<code><a href="http://localhost:7987/greet/Michael" id="" target="_blank" >http://localhost:7987/greet/Michael</a></code>にアクセスしてみます。</span>

</li>
<li>
<span class="merged" id="all.AFxEP.1" title="原文 : You should not be redirected and receive greeting from the application.">リダイレクトされず、アプリケーションからグリーティングを受信する必要があります。</span>

</li>
<li>
<span class="merged" id="all.1fMhc0.1" title="原文 : Enter the following into URL : http://localhost:7987/greet.">URLに次のように入力 : <code><a href="http://localhost:7987/greet" id="" target="_blank" >http://localhost:7987/greet</a></code>。</span>

</li>
<li>
<span class="merged" id="all.13z3WT.1" title="原文 : Keycloak redirect you to its login page.">Keycloakによって、そのログイン・ページにリダイレクトされます。</span>

</li>
<li>
<span class="merged" id="all.1i02Hl.1" title="原文 : Enter the username and associated password:">ユーザー名および関連するパスワードを入力してください:</span>
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1YyUAu.1" title="原文 : Username : myUser"><code>Username</code> : <code>myUser</code></span>

</li>
<li>
<span class="merged" id="all.1WmPM4.1" title="原文 : Password: password"><code>Password</code>: <code>password</code></span>

</li>
</ol>
</li>
<li>
<span class="merged" id="all.3VOAyN.1" title="原文 : After successful log in, keycloak redirect you to the http://localhost:7987/greet endpoint and print Hello word.">ログインに成功すると、keycloakによって<code><a href="http://localhost:7987/greet" id="" target="_blank" >http://localhost:7987/greet</a></code>エンドポイントにリダイレクトされ、Helloワードが出力されます。</span>

</li>
<li>
<span class="merged" id="all.2sjcTx.1" title="原文 : Press Ctrl+C to stop the application."><code>Ctrl+C</code>を押してアプリケーションを停止します。</span>

</li>
</ol>
<p><span class="merged" id="all.2fcTTt.1" title="原文 : From the actual settings, the user needs to log in only once, then Keycloak saves all the connection data.">実際の設定からは、ユーザーがログインする必要があるのは一度だけです。その後、Keycloakはすべての接続データを保存します。</span></p>

</div>

<h4 id="_update_tests_to_the_secure_environment"><span class="merged" id="all.36LGtq.1" title="原文 : Update tests to the secure environment">テストをセキュアな環境に更新</span></h4>
<div class="section">
<p><span class="merged" id="all.3rkY4G.1.spl1" title="原文 : At this stage of the application, tests cannot pass because of OIDC security.">アプリケーションのこの段階では、OIDCセキュリティのためにテストに合格できません。</span> <span class="merged" id="all.3rkY4G.1.spl2" title="原文 : The only way to authenticate a user is through the front end of that server which can be accessed with the browser for example.">ユーザーを認証する唯一の方法は、たとえばブラウザを使用してアクセスできるそのサーバーのフロント・エンドを介して行うことです。</span> </p>

<p><span class="merged" id="all.2935ZA.spl1" title="原文 : In order to keep security and test the application locally, a new security provider must be set up.">セキュリティを維持し、アプリケーションをローカルでテストするには、新しいセキュリティ・プロバイダを設定する必要があります。</span> <span class="merged" id="all.2935ZA.spl2" title="原文 : By adding specific configuration to the tests, it is possible to override the application configuration.">テストに特定の構成を追加することで、アプリケーション構成をオーバーライドできます。</span> </p>

<p><span class="merged" id="all.8vZjO.spl1" title="原文 : The following explains how to set a basic authentication instead of oidc security provider only for the tests.">次に、テスト専用のoidcセキュリティ・プロバイダのかわりに基本認証を設定する方法について説明します。</span> <span class="merged" id="all.8vZjO.spl2" title="原文 : Which means, at the end of this guide, the application will be secured by oidc security provider, and the tests will use basic authentication.">つまり、このガイドの最後では、アプリケーションはoidcセキュリティ・プロバイダによって保護され、テストは基本認証を使用します。</span> </p>

<markup
lang="xml"
title="次の依存性を<code>pom.xml</code>に追加します:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-http-auth&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3BIVZP" title="原文 : In the test folder helidon-quickstart-se/src/test:">テスト・フォルダ<code>helidon-quickstart-se/src/test</code>で、次の手順を実行します:</span></p>

<markup
lang="bash"
title="新規ディレクトリとその中に別のディレクトリを作成"
>mkdir resources
cd resources
touch application.yaml</markup>

<p><span class="merged" id="all.yY3uI" title="原文 : Open the application.yaml file">application.yamlファイルを開く</span></p>

<markup
lang="yaml"
title="これらのプロパティをapplication.yamlにコピー"
>app:
  greeting: "Hello"

server:
  port: 7987
  host: localhost

security:
  providers:
    - abac:
      # Adds ABAC Provider - it does not require any configuration
    - http-basic-auth:
        users:
          - login: "jack"
            password: "jackIsGreat"
    - oidc:
        client-id: "Your client ID"  <span class="conum" data-value="1" />
        client-secret: "Your client secret" <span class="conum" data-value="2" />
        identity-uri: "http://localhost:8080/auth/realms/myRealm"
        audience: "account"
        frontend-uri: "http://localhost:7987"
        server-type: "oidc"
  web-server:
    # protected paths on the web server - do not include paths served by Jersey, as those are protected directly
    paths:
      - path: "/greet"
        methods: ["get"]
        authenticate: true</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4KAYIF" title="原文 : Replace this field by your Keycloak client ID.">このフィールドをKeycloakクライアントIDに置き換えます。</span></li>
<li data-value="2"><span class="merged" id="all.4MSj4i" title="原文 : Replace this field by your Keycloak client Password.">このフィールドをKeycloakクライアントのパスワードに置き換えます。</span></li>
</ul>
<p><span class="merged" id="all.4G0K1W.spl1" title="原文 : Add the http-basic-auth properties in the security → providers property section.">security→ providersプロパティ・セクションに<code>http-basic-auth</code>プロパティを追加します。</span> <span class="merged" id="all.4G0K1W.spl2" title="原文 : This configuration will be used by the tests instead of the java/resources/application.yaml.">この構成は、<code>java/resources/application.yaml</code>のかわりにテストで使用されます。</span> </p>

<p><span class="merged" id="all.3D3j0R.1" title="原文 : In the MainTest.java file, tests need to be modified to check the application security when accessing /greet path with a GET method."><code>MainTest.java</code>ファイルで、<code>GET</code>メソッドを使用して<code>/greet</code>パスにアクセスするときにアプリケーション・セキュリティをチェックするようにテストを変更する必要があります。</span></p>

<markup
lang="java"
title="次のクラスをインポートします:"
>import java.util.Base64;
import io.helidon.common.http.Http;</markup>

<markup
lang="java"
title="最初のwebclientコールを次のようにtestHelloWorldメソッドに置き換えます:"
>webClient.get()
                .path("/greet")
                .request()
                .thenAccept(response -&gt; Assertions.assertEquals(401,response.status().code()))
                .toCompletableFuture()
                .get();</markup>

<p><span class="merged" id="all.3cwePI.spl1" title="原文 : This piece of code uses the webclient to access the application on /greet path with a GET method.">このコード部分では、webclientを使用して、<code>GET</code>メソッドで<code>/greet</code>パス上のアプリケーションにアクセスします。</span> <span class="merged" id="all.3cwePI.spl2" title="原文 : The http basic authentication security protects this path, so the client should receive an HTTP 401 code for unauthorized.">http basic認証セキュリティはこのパスを保護するため、クライアントは権限のないHTTP 401コードを受信する必要があります。</span> </p>

<p><span class="merged" id="all.3aRBni.1" title="原文 : Only jack user has access to this part of the application."><code>jack</code>ユーザーのみがアプリケーションのこの部分にアクセスできます。</span></p>

<markup
lang="java"
title="testHelloWorldメソッドに新しいチェックを追加します:"
>webClient.get()
                .path("/greet")
                .headers(headers -&gt;  {
                    String encoding = Base64.getEncoder().encodeToString("jack:jackIsGreat".getBytes());
                    headers.add(Http.Header.AUTHORIZATION, "Basic " + encoding);
                    return headers;
                })
                .request(JsonObject.class)
                .thenAccept(jsonObject -&gt; Assertions.assertEquals("Hello World!", jsonObject.getString("message")))
                .toCompletableFuture()
                .get();</markup>

<p><span class="merged" id="all.3vRloG.1.spl1" title="原文 : The username and password are encoded and placed inside the header in order to authenticate as jack to access the application.">ユーザー名とパスワードは、アプリケーションにアクセスするためのjackとして認証されるように、ヘッダー内にエンコードされて配置されます。</span> <span class="merged" id="all.3vRloG.1.spl2" title="原文 : If the authentication is successful, the application send the Hello World back as a JsonObject.">認証が成功すると、アプリケーションは<code>Hello World</code>を<code>JsonObject</code>として返送します。</span> </p>

<p><span class="merged" id="all.1fuWfo" title="原文 : Now, the project can be build without skipping test.">これで、テストをスキップせずにプロジェクトをビルドできます。</span></p>

<markup
lang="bash"
title="プロジェクトのビルド"
>mvn clean install</markup>

</div>

<h4 id="_restrict_access_to_a_specific_role"><span class="merged" id="all.qQxMW.1" title="原文 : Restrict access to a specific role">特定のロールへのアクセスの制限</span></h4>
<div class="section">
<p><span class="merged" id="all.1ZoXII.spl1" title="原文 : To give less access to an endpoint, it is possible to configure user role.">エンドポイントへのアクセス権を減らすために、ユーザー・ロールを構成できます。</span> <span class="merged" id="all.1ZoXII.spl2" title="原文 : So the application will only grant access to the user with the required role.">そのため、アプリケーションでは、必要なロールを持つユーザーにのみアクセス権が付与されます。</span> </p>

<p><span class="merged" id="all.1rAXKX" title="原文 : Add a user and roles to the helidon-quickstart-se/src/test/resources/application.yaml."><code>helidon-quickstart-se/src/test/resources/application.yaml</code>にユーザーおよびロールを追加します。</span></p>

<markup
lang="yaml"
title="jackロールを追加し、johnという名前の新しいユーザーを作成します:"
>- http-basic-auth:
        users:
          - login: "jack"
            password: "jackIsGreat"
            roles: [ "admin", "user" ]
          - login: "john"
            password: "johnPassword"
            roles: [ "user" ]</markup>

<p><span class="merged" id="all.4WLQQ5" title="原文 : Into the web-server section, the roles-allowed parameter defines which roles have access to the protected path and method."><code>web-server</code>セクションでは、<code>roles-allowed</code>パラメータによって、保護されたパスおよびメソッドにアクセスできるロールが定義されます。</span></p>

<markup
lang="yaml"
title="<code>admin</code>ロールの追加"
>web-server:
    # protected paths on the web server - do not include paths served by Jersey, as those are protected directly
    paths:
      - path: "/greet"
        methods: ["get"]
        roles-allowed: "admin"
        authenticate: true</markup>

<p><span class="merged" id="all.3xIu6K.spl1" title="原文 : Now, only Jack has access to secure endpoint as he has an admin role.">Jackのみが管理ロールを持つため、セキュアなエンドポイントにアクセスできるようになりました。</span> <span class="merged" id="all.3xIu6K.spl2" title="原文 : Jhon, as a simple user, can not access it.">Jhonは、単純なユーザーとしてアクセスできません。</span> <span class="merged" id="all.3xIu6K.spl3" title="原文 : Once it is done, go to the tests to check the application behavior.">完了したら、テストに移動してアプリケーションの動作を確認します。</span> <span class="merged" id="all.3xIu6K.spl4" title="原文 : The test from previous section is still passing as jack has access.">jackがアクセスできるため、前のセクションからのテストに合格しています。</span> </p>

<p><span class="merged" id="all.31DqI6.1" title="原文 : The user john has only the user role so when accessing protected endpoint, a 403 (Forbidden) http code is returned.">ユーザー<code>john</code>には<code>user</code>ロールのみがあるため、保護されたエンドポイントにアクセスすると、403 (禁止) httpコードが返されます。</span></p>

<markup
lang="java"
title="johnにアクセス権がないことを確認"
>webClient.get()
                .path("/greet")
                .headers(headers -&gt;  {
                    String encoding = Base64.getEncoder().encodeToString("john:johnPassword".getBytes());
                    headers.add(Http.Header.AUTHORIZATION,"Basic " + encoding);
                    return headers;
                })
                .request()
                .thenAccept(response -&gt; Assertions.assertEquals(403, response.status().code()))
                .toCompletableFuture()
                .get();</markup>

<markup
lang="bash"
title="プロジェクトのビルド"
>mvn clean install</markup>

<p><span class="merged" id="all.13ydNA.1" title="原文 : The tests pass, and your application is secured with specific roles in addition to user IDs.">テストに合格し、アプリケーションはユーザーIDに加えて特定のロールで保護されます。</span></p>

</div>
</div>
</div>
</doc-view>
