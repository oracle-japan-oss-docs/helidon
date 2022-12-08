<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2Q7Amm"  title="原文:: Performance Tuning">パフォーマンス・チューニング</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4KVb4b.spl1" title="原文 : In this guide you fill find basic advice for performance tuning of your Helidon application.">このガイドでは、Helidonアプリケーションのパフォーマンス・チューニングに関する基本的なアドバイスについて説明します。</span> <span class="merged" id="all.4KVb4b.spl2" title="原文 : Most of them target Netty tuning, as Helidon is based on it.">Helidonがベースであるため、ほとんどはNettyチューニングをターゲットとします。</span> <span class="merged" id="all.4KVb4b.spl3" title="原文 : You should also consider configuring/tuning Java heap size as per any Java application.">Javaアプリケーションによっては、Javaヒープ・サイズの構成/チューニングも考慮する必要があります。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_use_io_helidon_microprofile_bundleshelidon_microprofile_core"><span class="merged" id="all.3npSRa" title="原文 : Use io.helidon.microprofile.bundles:helidon-microprofile-core"><code>io.helidon.microprofile.bundles:helidon-microprofile-core</code>の使用</span></h2>
<div class="section">
<p><span class="merged" id="all.17mK6Q.spl1" title="原文 : Use helidon-microprofile-core dependency (and not the helidon-microprofile dependency) and add only what you use."><code>helidon-microprofile-core</code>依存関係(<code>helidon-microprofile</code>依存関係ではなく)を使用し、使用するもののみを追加します。</span> <span class="merged" id="all.17mK6Q.spl2"  title="原文:: For example:">次に例を示します。</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.bundles&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-core&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.health&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-health&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-media-jsonp&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_configure_netty_worker_thread_pool_size"><span class="merged" id="all.24dV5m" title="原文 : Configure Netty worker thread pool size">Nettyワーカー・スレッド・プール・サイズの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.fLxzb.spl1" title="原文 : The Netty worker thread-pool is what handles your incoming requests.">Nettyワーカー・スレッド・プールは、受信リクエストを処理します。</span> <span class="merged" id="all.fLxzb.spl2" title="原文 : It defaults to 2*NCPU.">デフォルトは2*NCPUです。</span> <span class="merged" id="all.fLxzb.spl3" title="原文 : To set it to something else you can set this property in microprofile-config.properties:">他のものに設定するには、<code>microprofile-config.properties</code>でこのプロパティを設定します:</span> </p>

<markup
lang="properties"

>server.worker-count=4</markup>


<h3 id="_configure_helidon_server_pool_size"><span class="merged" id="all.3iv1K5" title="原文 : Configure Helidon server pool size">Helidonサーバー・プール・サイズの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.23sgS8.spl1" title="原文 : The Helidon server thread-pool takes requests from Netty and invokes your JAX-RS endpoints.">Helidonサーバーのスレッド・プールはNettyからのリクエストを受け取り、JAX-RSエンドポイントを起動します。</span> <span class="merged" id="all.23sgS8.spl2" title="原文 : You can control lts configuration in microprofile-config.properties.">ltsの構成は<code>microprofile-config.properties</code>で制御できます。</span> <span class="merged" id="all.23sgS8.spl3" title="原文 : This is Helidon MP specific only.">これはHelidon MP固有のみです。</span> </p>

<markup
lang="properties"

>server.executor-service.core-pool-size: 2
server.executor-service.max-pool-size: 4</markup>

<p><span class="merged" id="all.3bVwvG" title="原文 : To verify settings increase the log level for Helidon&rsquo;s executor service by adding this to your logging.properties:">設定を検証するには、<code>logging.properties</code>に追加して、Helidonのエグゼキュータ・サービスのログ・レベルを増やします:</span></p>

<markup
lang="properties"

>io.helidon.common.configurable.ThreadPool.level=FINE</markup>

</div>


<h3 id="_configure_nettys_maxorder_helidon_2_4_1_or_earlier"><span class="merged" id="all.1HWokq" title="原文 : Configure Netty&rsquo;s maxOrder (Helidon 2.4.1 or earlier)">NettyのmaxOrderの構成(Helidon 2.4.1以前)</span></h3>
<div class="section">
<p><span class="merged" id="all.3dpJv8.spl1" title="原文 : In some situations Netty can aggressively allocate memory per request.">Nettyがリクエストごとにメモリーを積極的に割り当てる場合があります。</span> <span class="merged" id="all.3dpJv8.spl2" title="原文 : This has been addressed in recent versions of Helidon and Netty, but if you are running an earlier version set this system property when you start your Helidon application:">これは、最新バージョンのHelidonおよびNettyで対処されていますが、以前のバージョンを実行している場合は、Helidonアプリケーションの起動時にこのシステム・プロパティを設定します:</span> </p>

<markup


>-Dio.netty.allocator.maxOrder=6</markup>

<p><span class="merged" id="all.4Dr3tc" title="原文 : You can try smaller numbers.">小さい数字を試すことができます。</span></p>

</div>

</div>

</doc-view>
