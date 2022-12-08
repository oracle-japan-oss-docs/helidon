<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2Q7Amm.1"  title="原文:: Performance Tuning">パフォーマンス・チューニング</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4KVb4b.1.spl1" title="原文 : In this guide you fill find basic advice for performance tuning of your Helidon application.">このガイドでは、Helidonアプリケーションのパフォーマンス・チューニングに関する基本的なアドバイスについて説明します。</span> <span class="merged" id="all.4KVb4b.1.spl2" title="原文 : Most of them target Netty tuning, as Helidon is based on it.">Helidonがベースであるため、ほとんどはNettyチューニングをターゲットとします。</span> <span class="merged" id="all.4KVb4b.1.spl3" title="原文 : You should also consider configuring/tuning Java heap size as per any Java application.">Javaアプリケーションによっては、Javaヒープ・サイズの構成/チューニングも考慮する必要があります。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configure_netty_worker_thread_pool_size"><span class="merged" id="all.24dV5m.1" title="原文 : Configure Netty worker thread pool size">Nettyワーカー・スレッド・プール・サイズの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.7CVbb.spl1" title="原文 : The Netty worker thread-pool is what handles your incoming requests.">Nettyワーカー・スレッド・プールは、受信リクエストを処理します。</span> <span class="merged" id="all.7CVbb.spl2" title="原文 : It defaults to 2*NCPU.">デフォルトは2*NCPUです。</span> <span class="merged" id="all.7CVbb.spl3" title="原文 : To set it to something else you can set worker-count in resources/application.yaml:">他のものに設定するには、<code>resources/application.yaml</code>で<code>worker-count</code>を設定します:</span> </p>

<markup
lang="yaml"

>server:
  port: 8080
  host: 0.0.0.0
  worker-count: 2</markup>

</div>


<h2 id="_configure_nettys_maxorder_helidon_2_4_1_or_earlier"><span class="merged" id="all.1HWokq.1" title="原文 : Configure Netty&rsquo;s maxOrder (Helidon 2.4.1 or earlier)">NettyのmaxOrderの構成(Helidon 2.4.1以前)</span></h2>
<div class="section">
<p><span class="merged" id="all.3dpJv8.1.spl1" title="原文 : In some situations Netty can aggressively allocate memory per request.">Nettyがリクエストごとにメモリーを積極的に割り当てる場合があります。</span> <span class="merged" id="all.3dpJv8.1.spl2" title="原文 : This has been addressed in recent versions of Helidon and Netty, but if you are running an earlier version set this system property when you start your Helidon application:">これは、最新バージョンのHelidonおよびNettyで対処されていますが、以前のバージョンを実行している場合は、Helidonアプリケーションの起動時にこのシステム・プロパティを設定します:</span> </p>

<markup
lang="bash"

>-Dio.netty.allocator.maxOrder=6</markup>

<p><span class="merged" id="all.4Dr3tc.1" title="原文 : You can try smaller numbers.">小さい数字を試すことができます。</span></p>

</div>

</doc-view>
