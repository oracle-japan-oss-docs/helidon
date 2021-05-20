<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3J8uun.1" title="原文 : GraalVM native image">GraalVMネイティブ・イメージ</span></dt>
<dd slot="desc"><p><span class="merged" id="all.21nJRV.1" title="原文 : Helidon applications can be compiled into a native executable using GraalVM native image.">Helidonアプリケーションは、GraalVMネイティブ・イメージを使用してネイティブ実行可能ファイルにコンパイルできます。</span></p>

<p><span class="merged" id="all.NNcpl.1" title="原文 : When using applications created using the CLI, or when you configure Helidon application pom as a parent of your module, you can use the following steps to build a native image from your application:">CLIを使用して作成したアプリケーションを使用する場合、またはHelidonアプリケーションpomをモジュールの親として構成する場合は、次のステップを使用してアプリケーションからネイティブ・イメージをビルドできます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1wFzli.1" title="原文 : Create an environment variable GRAALVM_HOME pointing to your installation of GraalVM with native-image installed"><code>native-image</code>がインストールされているGraalVMのインストールを指す環境変数<code>GRAALVM_HOME</code>を作成</span>

</li>
<li>
<span class="merged" id="all.1pG1Dw.1" title="原文 : Run Maven command mvn clean package -Pnative-image">Mavenコマンド<code>mvn clean package -Pnative-image</code>の実行</span>

</li>
<li>
<span class="merged" id="all.HCY6e.1" title="原文 : Execute the native executable created in target directory of your project">プロジェクトの<code>target</code>ディレクトリに作成されたネイティブ実行可能ファイルを実行</span>

</li>
</ol></dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_aot_supported_modules"><span class="merged" id="all.fzWjI.1" title="原文 : AOT supported modules">AOTでサポートされるモジュール</span></h2>
<div class="section">
<p><span class="merged" id="all.4djth0.1.spl1" title="原文 : Some Helidon components are not (yet) supported in native image, some have restrictions.">一部のHelidonコンポーネントは(まだ)ネイティブ・イメージでサポートされていませんが、制限があります。</span> <span class="merged" id="all.4djth0.1.spl2" title="原文 : The following table lists all Helidon features and their support for native image.">次の表に、Helidonのすべての機能とネイティブ・イメージのサポートを示します。</span> </p>

<div class="block-title"><span class="merged" id="all.1uZ2kL" title="原文 : Helidon SE features in AOT"><span>AOTのHelidon SE機能</span></span></div>
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
<th></th>
<th><span class="merged" id="all.3odUWw.1"  title="原文:: Feature">機能</span></th>
<th><span class="merged" id="all.3iYRkK.1"  title="原文:: Component">コンポーネント</span></th>
<th><span class="merged" id="all.2XBkDH.1" title="原文 : AOT note">AOTノート</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.5W6W2.47" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.G09eF.1"  title="原文:: Config"><strong>構成</strong></span></td>
<td class=""><span class="merged" id="all.3rjwSI.3"  title="原文:: Config">構成</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.48" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.Nhjlz.1"  title="原文:: Encryption">暗号化</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.49" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4ZLyDS" title="原文 : HOCON">HOCON</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.50" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.18OueY"  title="原文:: Object Mapping">オブジェクト・マッピング</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.51" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.42WB1c.2" title="原文 : YAML">YAML</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.15jl0W.7" title="原文 : ❓">❓</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2Er12C" title="原文 : etcd">etcd</span></td>
<td class=""><span class="merged" id="all.iyV9h.7" title="原文 : Not yet tested.">テストされていません。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.52" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1UbBa0"  title="原文:: git">git</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.53" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.2zgzWe" title="原文 : Db Client"><strong>DBクライアント</strong></span></td>
<td class=""><span class="merged" id="all.1L5eEp" title="原文 : Db Client">DBクライアント</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.54" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1G6No9.1"  title="原文:: Health Check">ヘルス・チェック</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZrdKE.3"  title="原文: &#128310;">&#128310;</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2dNO4a"  title="原文:: JDBC">JDBC</span></td>
<td class=""><span class="merged" id="all.3bLUr4" title="原文 : Tested with Helidon modules for Oracle and H2 driver (see examples)">OracleおよびH2ドライバ用のHelidonモジュールでテスト済(例を参照)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.55" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4LL0ot.6"  title="原文:: Metrics">メトリクス</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.56" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4Mk18P.3"  title="原文:: Tracing">トレース</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.57" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.24ZfqJ" title="原文 : mongo">mongo</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.58" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.1gPV1X.1"  title="原文:: Health"><strong>ヘルス</strong></span></td>
<td class=""><span class="merged" id="all.3gjytB.1"  title="原文:: Health">Health</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.59" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3NkOjw.1"  title="原文:: Built-ins">ビルトイン</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.60" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.3rAKtw.1"  title="原文:: Messaging"><strong>メッセージング</strong></span></td>
<td class=""><span class="merged" id="all.1zdT7a.1"  title="原文:: Messaging">メッセージング</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.61" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.3H9ySM.2"  title="原文:: Metrics"><strong>メトリクス</strong></span></td>
<td class=""><span class="merged" id="all.4LL0ot.7"  title="原文:: Metrics">メトリクス</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.62" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.1JX3D6"  title="原文: OpenAPI"><strong>OpenAPI</strong></span></td>
<td class=""><span class="merged" id="all.1xELY5.1"  title="原文: OpenAPI">OpenAPI</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.63" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.S66bH.1"  title="原文:: Security"><strong>セキュリティ</strong></span></td>
<td class=""><span class="merged" id="all.17B62B.2"  title="原文:: Security">セキュリティ</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.64" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3y2IdP.1" title="原文 : Integration: Jersey">統合: Jersey</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.65" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.xLtxb.1" title="原文 : Integration: WebServer">統合: WebServer</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.66" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1tZse1.1" title="原文 : Integration: gRPC">統合: gRPC</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.67" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4Dxl7j.1" title="原文 : OIDC">OIDC</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.68" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2tIIr6.1" title="原文 : Provider: ABAC">Provider: ABAC</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.69" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1F2TWO.1" title="原文 : Provider/ABAC/Policy: EL">Provider/ABAC/Policy: EL</span></td>
<td class=""><span class="merged" id="all.iyV9h.8" title="原文 : Not yet tested.">テストされていません。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.70" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3T4kTO.1" title="原文 : Provider/ABAC: Role">Provider/ABAC: Role</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.71" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2KPFZB.1" title="原文 : Provider/ABAC: Scope">Provider/ABAC: Scope</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.72" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2ReCqH.1" title="原文 : Provider/ABAC: Time">Provider/ABAC: Time</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.15jl0W.8" title="原文 : ❓">❓</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.49a1QL.1" title="原文 : Provider: Google Login">Provider: Googleログイン</span></td>
<td class=""><span class="merged" id="all.iyV9h.9" title="原文 : Not yet tested.">テストされていません。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.73" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4UtKqZ.1" title="原文 : Provider: Header">Provider: Header</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.74" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1Dsh1P.1" title="原文 : Provider: HTTP Basic">Provider: HTTP Basic</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.75" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1sZSdM.1" title="原文 : Provider: HTTP Digest">Provider: HTTPダイジェスト</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.76" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1kBjUX.1" title="原文 : Provider: HTTP Signatures">Provider: HTTPシグネチャ</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.15jl0W.9" title="原文 : ❓">❓</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1Lw028.1" title="原文 : Provider: IDCS Role Mapper">Provider: IDCSロール・マッパー</span></td>
<td class=""><span class="merged" id="all.iyV9h.10" title="原文 : Not yet tested.">テストされていません。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.77" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1nzqPO.1" title="原文 : Provider: JWT">Provider: JWT</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.78" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.129ViC.1" title="原文 : Tracing"><strong>トレース</strong></span></td>
<td class=""><span class="merged" id="all.4Mk18P.4"  title="原文:: Tracing">トレース</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.79" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.k4WNd.1" title="原文 : Integration: Jersey Server">統合: Jersey Server</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.80" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3KLmck.1" title="原文 : Integration: Jersey Client">統合: Jerseyクライアント</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.81" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1hFTJC.1" title="原文 : Jaeger">Jaeger</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.82" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3ObgPq.1" title="原文 : Zipkin">Zipkin</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.83" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.4NF9PA"  title="原文: WebClient"><strong>WebClient</strong></span></td>
<td class=""><span class="merged" id="all.5tqDq"  title="原文: WebClient">WebClient</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.84" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2Of9L4.1"  title="原文:: Web Client">Webクライアント</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.85" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2ghgYh"  title="原文:: Jackson">Jackson</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.86" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1mODvU" title="原文 : JSON-B">JSON-B</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.87" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2gLB0a" title="原文 : JSON-P">JSON-P</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.88" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4LL0ot.8"  title="原文:: Metrics">メトリクス</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.89" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3s6VUz" title="原文 : Multi-part">Multi-part</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.90" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.17B62B.3"  title="原文:: Security">セキュリティ</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.91" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4Mk18P.5"  title="原文:: Tracing">トレース</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.92" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.30Zw5"  title="原文: WebServer"><strong>WebServer</strong></span></td>
<td class=""><span class="merged" id="all.2mhjof"  title="原文: WebServer">WebServer</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.93" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.38NrJK.1"  title="原文:: Access Log">アクセス・ログ</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.94" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.36nAfS.1"  title="原文:: CORS">CORS</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.95" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2ghgYh.1"  title="原文:: Jackson">Jackson</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.96" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4FQBwO"  title="原文:: Jersey">Jersey</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.97" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.1mODvU.1" title="原文 : JSON-B">JSON-B</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.98" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.2gLB0a.1" title="原文 : JSON-P">JSON-P</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.99" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3s6VUz.1" title="原文 : Multi-part">Multi-part</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.15jl0W.10" title="原文 : ❓">❓</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.S6LiV"  title="原文:: Prometheus">Prometheus</span></td>
<td class=""><span class="merged" id="all.iyV9h.11" title="原文 : Not yet tested.">テストされていません。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.100" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.3WHG7G.1"  title="原文:: Websocket">Websocket</span></td>
<td class=""><span class="merged" id="all.iyA5Y"  title="原文:: Server only.">サーバーのみ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.101" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.28p4Zd.1" title="原文 : gRPC Server"><strong>gRPCサーバー</strong></span></td>
<td class=""><span class="merged" id="all.1da6M9.1" title="原文 : gRPC Server">gRPCサーバー</span></td>
<td class=""><span class="merged" id="all.dKzJf" title="原文 : Since GraalVM 21.0.0">GraalVM 21.0.0以降</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.102" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4LL0ot.9"  title="原文:: Metrics">メトリクス</span></td>
<td class="">&#160;</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.103" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.2nOjUO.1" title="原文 : gRPC Client"><strong>gRPCクライアント</strong></span></td>
<td class=""><span class="merged" id="all.3axUdK.1" title="原文 : gRPC Client">gRPCクライアント</span></td>
<td class=""><span class="merged" id="all.dKzJf.1" title="原文 : Since GraalVM 21.0.0">GraalVM 21.0.0以降</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5W6W2.104" title="原文 : ✅">✅</span></td>
<td class=""><strong>&#160;</strong></td>
<td class=""><span class="merged" id="all.4LL0ot.10"  title="原文:: Metrics">メトリクス</span></td>
<td class="">&#160;</td>
</tr>
</tbody>
</table>
</div>
</div>
</doc-view>
