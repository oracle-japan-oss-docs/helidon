<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.12gkdk" title="原文 : WebServer Introduction">WebServer概要</span></dt>
<dd slot="desc"><p><span class="merged" id="all.28V0b1.spl1" title="原文 : WebServer provides an asynchronous and reactive API for creating web applications.">WebServerは、Webアプリケーションを作成するための非同期のリアクティブAPIを提供します。</span> <span class="merged" id="all.28V0b1.spl2" title="原文 : The API is inspired by popular NodeJS and Java frameworks.">APIは、一般的なNodeJSおよびJavaフレームワークによってインスピレーションされます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.67"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.YBhty" title="原文 : To enable WebServer add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">WebServerを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_quick_start"><span class="merged" id="all.2FbcJI.3"  title="原文:: Quick Start">クイック・スタート</span></h2>
<div class="section">
<p><span class="merged" id="all.3F6RBt" title="原文 : Here is the code for a minimalist web application that runs on a random free port:">ランダムな空きポートで実行される最小のwebアプリケーションのコードを次に示します:</span></p>

<markup
lang="java"

>    public static void main(String[] args) {
        WebServer webServer = WebServer
                .create(Routing.builder()
                                .any((req, res) -&gt; res.send("It works!"))) <span class="conum" data-value="1" />
                .start() <span class="conum" data-value="2" />
                .await(10, TimeUnit.SECONDS); <span class="conum" data-value="3" />

        System.out.println("Server started at: http://localhost:" + webServer.port()); <span class="conum" data-value="4" />
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3sUheI" title="原文 : For any kind of request, at any path, respond with It works!.">任意のタイプのリクエストについて、任意のパスで<code>It works!</code>を使用して応答します。</span></li>
<li data-value="2"><span class="merged" id="all.4MC0LP.2"  title="原文:: Start the server.">サーバーを起動します。</span></li>
<li data-value="3"><span class="merged" id="all.1WukzX" title="原文 : Wait for the server to start while throwing possible errors as runtime exceptions.">サーバーが起動するまで待機し、実行時例外として発生する可能性のあるエラーをスローします。</span></li>
<li data-value="4"><span class="merged" id="all.3MUwZI" title="原文 : The server is bound to a random free port.">サーバーはランダムな空きポートにバインドされています。</span></li>
</ul>
</div>
</doc-view>
