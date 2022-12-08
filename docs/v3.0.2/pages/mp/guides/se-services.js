<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4ci77F" title="原文 : Reusing Helidon SE services">Helidon SEサービスの再利用</span></dt>
<dd slot="desc"><p><span class="merged" id="all.41Xviy" title="原文 : This guide shows how reuse Helidon SE Service in your Helidon MP application.">このガイドでは、Helidon MPアプリケーションでHelidon SE Serviceを再利用する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.10"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.2vag3o.2" title="原文 : For this 10 minute tutorial, you will need the following:">この10分間のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.3J4a7U.8" title="原文 : A Helidon MP Application">Helidon MPアプリケーション</span></td>
<td class=""><span class="merged" id="all.13muNj.8" title="原文 : You can use your own application or use the Helidon MP Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/mp/guides/quickstart">「Helidon MPクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2sRt9f.10" title="原文 : Java&#160;SE&#160;17 (Open&#160;JDK&#160;17)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java&#160;SE&#160;17</a> (<a href="http://jdk.java.net" target="_blank">Open&#160;JDK&#160;17</a>)</span></td>
<td class=""><span class="merged" id="all.3aBChT.10" title="原文 : Helidon requires Java 17+.">HelidonにはJava 17以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1DYqqk.11" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.10" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.10"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.10" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.10"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.10" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
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
export JAVA_HOME=`/usr/libexec/java_home -v 17`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-17</markup>

<p><span class="merged" id="all.3zpHSr.spl1" title="原文 : Helidon MP supports Reactive routing which brings possibility for reusing io.helidon.webserver.Service implementations in Helidon MP.">Helidon MPは、Helidon MPで<code>io.helidon.webserver.Service</code>実装を再利用できるようにする<router-link to="/mp/server">「リアクティブ・ルーティング」</router-link>をサポートしています。</span> <span class="merged" id="all.3zpHSr.spl2" title="原文 : Such feature can be quite useful for common solutions for filtering, auditing, logging or augmenting REST endpoints in hybrid Helidon SE/MP environment.">このような機能は、ハイブリッドHelidon SE/MP環境でRESTエンドポイントをフィルタリング、監査、ロギングまたは拡張するための一般的なソリューションに非常に役立ちます。</span> </p>

<p><span class="merged" id="all.4908wa" title="原文 : Let&rsquo;s define simple Helidon SE Service for adding special header to every REST response:">すべてのRESTレスポンスに特別なヘッダーを追加するための単純なHelidon SEサービスを定義します:</span></p>

<markup
lang="java"

>public class CoolingService implements Service, Handler {

    public static final String COOL_HEADER_NAME = "Cool-Header";
    public static final String COOLING_VALUE = "This is way cooler response than ";

    @Override
    public void update(Routing.Rules rules) {
        rules.any(this);
    }

    @Override
    public void accept(ServerRequest req, ServerResponse res) {
        res.headers().add(COOL_HEADER_NAME, COOLING_VALUE);
        req.next();
    }
}</markup>

<p><span class="merged" id="all.2iRP7m" title="原文 : Its easy to use it with Helidon SE:">Helidon SEで簡単に使用できます:</span></p>

<markup
lang="java"

>WebServer.builder(Routing.builder()
                    // register service with routing path
                    .register("/cool", new CoolingService())
                    .build())
                .config(config)
                .addMediaSupport(JsonpSupport.create())
                .build()
                .start();</markup>

<p><span class="merged" id="all.U68wI" title="原文 : And not much harder to use it with Helidon MP:">また、Helidon MPでの使用はあまり困難ではありません:</span></p>

<markup
lang="java"

>@ApplicationScoped
public class MyBean {

    @Produces
    @ApplicationScoped
    @RoutingPath("/cool")
    public Service coolService() {
        return new CoolingService();
    }

}</markup>

<p><span class="merged" id="all.1PpxeI" title="原文 : You can leverage annotations:">注釈は次のように利用できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.32sTsb" title="原文 : @RoutingPath - path of the WebServer service">@RoutingPath - WebServerサービスのパス</span></p>

</li>
<li>
<p><span class="merged" id="all.BMkZ8" title="原文 : @RoutingName - select routing when serving requests on multiple ports">@RoutingName - <router-link to="/mp/server">「複数のポートでのリクエストの処理」</router-link>の場合のルーティングの選択</span></p>

</li>
</ul>

</div>

</doc-view>
