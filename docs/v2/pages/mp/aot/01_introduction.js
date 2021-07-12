<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3J8uun" title="原文 : GraalVM native image">GraalVMネイティブ・イメージ</span></dt>
<dd slot="desc"><p><span class="merged" id="all.21nJRV" title="原文 : Helidon applications can be compiled into a native executable using GraalVM native image.">Helidonアプリケーションは、GraalVMネイティブ・イメージを使用してネイティブ実行可能ファイルにコンパイルできます。</span></p>

<p><span class="merged" id="all.NNcpl" title="原文 : When using applications created using the CLI, or when you configure Helidon application pom as a parent of your module, you can use the following steps to build a native image from your application:">CLIを使用して作成したアプリケーションを使用する場合、またはHelidonアプリケーションpomをモジュールの親として構成する場合は、次のステップを使用してアプリケーションからネイティブ・イメージをビルドできます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1wFzli" title="原文 : Create an environment variable GRAALVM_HOME pointing to your installation of GraalVM with native-image installed"><code>native-image</code>がインストールされているGraalVMのインストールを指す環境変数<code>GRAALVM_HOME</code>を作成</span>

</li>
<li>
<span class="merged" id="all.1pG1Dw" title="原文 : Run Maven command mvn clean package -Pnative-image">Mavenコマンド<code>mvn clean package -Pnative-image</code>の実行</span>

</li>
<li>
<span class="merged" id="all.HCY6e" title="原文 : Execute the native executable created in target directory of your project">プロジェクトの<code>target</code>ディレクトリに作成されたネイティブ実行可能ファイルを実行</span>

</li>
</ol></dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_aot_supported_modules"><span class="merged" id="all.fzWjI" title="原文 : AOT supported modules">AOTでサポートされるモジュール</span></h2>
<div class="section">
<p><span class="merged" id="all.4djth0.spl1" title="原文 : Some Helidon components are not (yet) supported in native image, some have restrictions.">一部のHelidonコンポーネントは(まだ)ネイティブ・イメージでサポートされていませんが、制限があります。</span> <span class="merged" id="all.4djth0.spl2" title="原文 : The following table lists all Helidon features and their support for native image.">次の表に、Helidonのすべての機能とネイティブ・イメージのサポートを示します。</span> </p>

<div class="block-title"><span class="merged" id="all.47LAY7" title="原文 : Helidon MP features in AOT"><span>AOTのHelidon MP機能</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 6.667%;">
<col style="width: 13.333%;">
<col style="width: 40%;">
<col style="width: 40%;">
</colgroup>
<thead>
<tr>
<th>&#160;</th>
<th><span class="merged" id="all.3odUWw"  title="原文:: Feature">機能</span></th>
<th><span class="merged" id="all.3iYRkK"  title="原文:: Component">コンポーネント</span></th>
<th><span class="merged" id="all.2XBkDH" title="原文 : AOT note">AOTノート</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.5W6W2" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.nxZlB"  title="原文:: CDI"><strong>CDI</strong></span></td>
<td class=""><span class="merged" id="all.PaGKs"  title="原文:: CDI">CDI</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.1" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.G09eF"  title="原文:: Config"><strong>構成</strong></span></td>
<td class=""><span class="merged" id="all.3rjwSI"  title="原文:: Config">構成</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.2" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.Nhjlz"  title="原文:: Encryption">暗号化</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.3" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.42WB1c" title="原文 : YAML">YAML</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.4" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.1cQXUH"  title="原文:: Fault Tolerance"><strong>フォルト・トレランス</strong></span></td>
<td class=""><span class="merged" id="all.33Hpa1"  title="原文:: Fault Tolerance">フォルト・トレランス</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.5" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.1gPV1X"  title="原文:: Health"><strong>ヘルス</strong></span></td>
<td class=""><span class="merged" id="all.3gjytB"  title="原文:: Health">Health</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.6" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3NkOjw"  title="原文:: Built-ins">ビルトイン</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.7" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.4RWyVW"  title="原文:: JAX-RS"><strong>JAX-RS</strong></span></td>
<td class=""><span class="merged" id="all.18kqhC"  title="原文:: JAX-RS">JAX-RS</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.8" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.3Rok6n"  title="原文:: JPA"><strong>JPA</strong></span></td>
<td class=""><span class="merged" id="all.12uugA"  title="原文:: JPA">JPA</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.15jl0W" title="原文 : ❓">❓</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.51m2q"  title="原文: EclipseLink">EclipseLink</span></td>
<td class=""><span class="merged" id="all.iyV9h" title="原文 : Not yet tested.">テストされていません。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZrdKE"  title="原文: &#128310;">&#128310;</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.22bm0n"  title="原文:: Hibernate">Hibernate</span></td>
<td class=""><span class="merged" id="all.6fn8o" title="原文 : Experimental support, tested on limited use cases with Helidon Oracle and H2 JDBC modules">Helidon OracleおよびH2 JDBCモジュールを使用した限定的なユースケースでテストされた試験的サポート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZrdKE.1"  title="原文: &#128310;">&#128310;</span></td>
<td class=""><span class="merged" id="all.EEArn"  title="原文:: JTA"><strong>JTA</strong></span></td>
<td class=""><span class="merged" id="all.1hsRGc"  title="原文:: JTA">JTA</span></td>
<td class=""><span class="merged" id="all.fngcP" title="原文 : Experimental support, tested on limited use cases">試験的なサポート、限られたユースケースでのテスト</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.9" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.3rAKtw"  title="原文:: Messaging"><strong>メッセージング</strong></span></td>
<td class=""><span class="merged" id="all.1zdT7a"  title="原文:: Messaging">メッセージング</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.10" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.3H9ySM"  title="原文:: Metrics"><strong>メトリクス</strong></span></td>
<td class=""><span class="merged" id="all.4LL0ot"  title="原文:: Metrics">メトリクス</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.11" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.fbozp" title="原文 : Open API"><strong>オープンAPI</strong></span></td>
<td class=""><span class="merged" id="all.1oXEcB"  title="原文:: Open API">オープンAPI</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZrdKE.2"  title="原文: &#128310;">&#128310;</span></td>
<td class=""><span class="merged" id="all.3kykB2" title="原文 : REST Client"><strong>RESTクライアント</strong></span></td>
<td class=""><span class="merged" id="all.R7F2E"  title="原文:: REST Client">RESTクライアント</span></td>
<td class=""><span class="merged" id="all.2UAcC" title="原文 : Does not support execution of default methods on interfaces.">インタフェースでのデフォルト・メソッドの実行はサポートされていません。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.12" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.S66bH"  title="原文:: Security"><strong>セキュリティ</strong></span></td>
<td class=""><span class="merged" id="all.17B62B"  title="原文:: Security">セキュリティ</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.13" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3y2IdP" title="原文 : Integration: Jersey">統合: Jersey</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.14" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.xLtxb" title="原文 : Integration: WebServer">統合: WebServer</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.15" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1tZse1" title="原文 : Integration: gRPC">統合: gRPC</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.16" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.NFr8l" title="原文 : JWT Auth">JWT認証</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.17" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4Dxl7j" title="原文 : OIDC">OIDC</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.18" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2tIIr6" title="原文 : Provider: ABAC">Provider: ABAC</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.19" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1F2TWO" title="原文 : Provider/ABAC/Policy: EL">Provider/ABAC/Policy: EL</span></td>
<td class=""><span class="merged" id="all.3G7Sdn" title="原文 : Requires reflection configuration for used classes.">使用されるクラスのリフレクション構成が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.20" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3T4kTO" title="原文 : Provider/ABAC: Role">Provider/ABAC: Role</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.21" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2KPFZB" title="原文 : Provider/ABAC: Scope">Provider/ABAC: Scope</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.22" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2ReCqH" title="原文 : Provider/ABAC: Time">Provider/ABAC: Time</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.15jl0W.1" title="原文 : ❓">❓</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.49a1QL" title="原文 : Provider: Google Login">Provider: Googleログイン</span></td>
<td class=""><span class="merged" id="all.iyV9h.1" title="原文 : Not yet tested.">テストされていません。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.23" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4UtKqZ" title="原文 : Provider: Header">Provider: Header</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.24" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1Dsh1P" title="原文 : Provider: HTTP Basic">Provider: HTTP Basic</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.25" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1sZSdM" title="原文 : Provider: HTTP Digest">Provider: HTTPダイジェスト</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.26" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1kBjUX" title="原文 : Provider: HTTP Signatures">Provider: HTTPシグネチャ</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.15jl0W.2" title="原文 : ❓">❓</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1Lw028" title="原文 : Provider: IDCS Role Mapper">Provider: IDCSロール・マッパー</span></td>
<td class=""><span class="merged" id="all.iyV9h.2" title="原文 : Not yet tested.">テストされていません。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.27" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1nzqPO" title="原文 : Provider: JWT">Provider: JWT</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.28" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.24ozwH"  title="原文:: Server"><strong>サーバー</strong></span></td>
<td class=""><span class="merged" id="all.1iS4jA"  title="原文:: Server">サーバー</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.29" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.38NrJK"  title="原文:: Access Log">アクセス・ログ</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.30" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.36nAfS"  title="原文:: CORS">CORS</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.31" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.129ViC" title="原文 : Tracing"><strong>トレース</strong></span></td>
<td class=""><span class="merged" id="all.4Mk18P"  title="原文:: Tracing">トレース</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.32" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.k4WNd" title="原文 : Integration: Jersey Server">統合: Jersey Server</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.33" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3KLmck" title="原文 : Integration: Jersey Client">統合: Jerseyクライアント</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.34" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1hFTJC" title="原文 : Jaeger">Jaeger</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.35" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3ObgPq" title="原文 : Zipkin">Zipkin</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.36" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.2Iehig"  title="原文:: Web Client"><strong>Webクライアント</strong></span></td>
<td class=""><span class="merged" id="all.2Of9L4"  title="原文:: Web Client">Webクライアント</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.37" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4LL0ot.1"  title="原文:: Metrics">メトリクス</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.38" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.17B62B.1"  title="原文:: Security">セキュリティ</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.39" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4Mk18P.1"  title="原文:: Tracing">トレース</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.40" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3WHG7G"  title="原文:: Websocket">Websocket</span></td>
<td class=""><span class="merged" id="all.iyA5Y"  title="原文:: Server only.">サーバーのみ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.41" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.28p4Zd" title="原文 : gRPC Server"><strong>gRPCサーバー</strong></span></td>
<td class=""><span class="merged" id="all.1da6M9" title="原文 : gRPC Server">gRPCサーバー</span></td>
<td class=""><span class="merged" id="all.dKzJf" title="原文 : Since GraalVM 21.0.0">GraalVM 21.0.0以降</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.42" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4LL0ot.2"  title="原文:: Metrics">メトリクス</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.43" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.2nOjUO" title="原文 : gRPC Client"><strong>gRPCクライアント</strong></span></td>
<td class=""><span class="merged" id="all.3axUdK" title="原文 : gRPC Client">gRPCクライアント</span></td>
<td class=""><span class="merged" id="all.dKzJf.1" title="原文 : Since GraalVM 21.0.0">GraalVM 21.0.0以降</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.44" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4LL0ot.3"  title="原文:: Metrics">メトリクス</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.45" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.4S53Of"  title="原文:: Scheduling"><strong>スケジューリング</strong></span></td>
<td class=""><span class="merged" id="all.3H14IH"  title="原文:: Scheduling">スケジューリング</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.46" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.Dk7n"  title="原文:: OCI"><strong>OCI</strong></span></td>
<td class=""><span class="merged" id="all.1ICdWw" title="原文 : OCI Integration">OCI統合</span></td>
<td class=""><span class="merged" id="all.44S6t1" title="原文 : Modules with group id io.helidon.integrations.oci">グループIDが<code>io.helidon.integrations.oci</code>のモジュール</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.47" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.2au54F"  title="原文:: Vault"><strong>Vault</strong></span></td>
<td class=""><span class="merged" id="all.3gS2B3" title="原文 : Hashicorp Vault Integration">Hashicorp Vault統合</span></td>
<td class="">&#160;</td>
</tr>
</tbody>
</table>
</div>
</div>
</doc-view>
