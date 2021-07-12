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

<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.7"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.10cPjD.5" title="原文 : About 10 minutes">約10分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.27GIMH.13" title="原文 : Helidon Prerequisites"><router-link to="/about/03_prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.o83ab.1" title="原文 : A Helidon MP application, such as Helidon MP Quickstart"><router-link to="/mp/guides/02_quickstart">Helidon MP QuickstartなどのHelidon MPアプリケーション</router-link></span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.1j1Q8V.spl1" title="原文 : Helidon MP supports Reactive routing which brings possibility for reusing io.helidon.webserver.Service implementations in Helidon MP.">Helidon MPは、Helidon MPで<code>io.helidon.webserver.Service</code>実装を再利用できるようにする<router-link to="/mp/jaxrs/10_reactive-routing">「リアクティブ・ルーティング」</router-link>をサポートしています。</span> <span class="merged" id="all.1j1Q8V.spl2" title="原文 : Such feature can be quite useful for common solutions for filtering, auditing, logging or augmenting REST endpoints in hybrid Helidon SE/MP environment.">このような機能は、ハイブリッドHelidon SE/MP環境でRESTエンドポイントをフィルタリング、監査、ロギングまたは拡張するための一般的なソリューションに非常に役立ちます。</span> </p>

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
<p><span class="merged" id="all.2C0ZYD" title="原文 : @RoutingName - select routing when serving requests on multiple ports">@RoutingName - <router-link :to="{path: '/mp/jaxrs/02_server-configuration', hash: '#conf-additional-ports'}">「複数のポートでのリクエストの処理」</router-link>の場合のルーティングの選択</span></p>

</li>
</ul>
</div>
</doc-view>
