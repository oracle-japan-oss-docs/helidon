<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4Uualh" title="原文 : WebServer HTTP Compression">WebServer HTTP圧縮</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4CIO2t.spl1" title="原文 : HTTP compression can improve bandwidth utilization and transfer speeds in certain scenarios.">HTTP圧縮により、特定のシナリオで帯域幅の使用率と転送速度を向上させることができます。</span> <span class="merged" id="all.4CIO2t.spl2" title="原文 : It requires a few extra CPU cycles for compressing and uncompressing, but these can be offset if data is transferred over low-bandwidth network links.">圧縮および圧縮解除にはいくつかの追加のCPUサイクルが必要ですが、低帯域幅のネットワーク・リンクを介してデータが転送される場合は、これらをオフセットできます。</span> </p>

<p><span class="merged" id="all.1vdXZ4.spl1" title="原文 : A client advertises the compression encodings it supports at request time, and the WebServer responds by selecting an encoding it supports and setting it in a header, effectively negotiating the content encoding of the response.">クライアントは、リクエスト時にサポートする圧縮エンコーディングを通知し、WebServerは、サポートするエンコーディングを選択してヘッダーに設定することで応答し、効率的にレスポンスのコンテンツ・エンコーディングを<em>「ネゴシエーション」</em>します。</span> <span class="merged" id="all.1vdXZ4.spl2" title="原文 : If none of the advertised encodings is supported by the WebServer, the response is returned uncompressed.">通知されたエンコーディングのいずれもWebServerでサポートされていない場合、レスポンスは圧縮されずに返されます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configuring_http_compression"><span class="merged" id="all.3bg4N2" title="原文 : Configuring HTTP Compression">HTTP圧縮の構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1C7imt.spl1" title="原文 : HTTP compression in the Helidon WebServer is disabled by default.">Helidon WebServerでのHTTP圧縮は、デフォルトでは<em>「無効」</em>です。</span> <span class="merged" id="all.1C7imt.spl2" title="原文 : It can sometimes interfere with certain applications that use streaming, even if a compression encoding has not been negotiated with the client.">圧縮エンコーディングがクライアントとネゴシエーションされていない場合でも、ストリーミングを使用する特定のアプリケーションに干渉することがあります。</span> </p>

<p><span class="merged" id="all.4XPxiL.spl1" title="原文 : It can be enabled either programmatically or via configuration, and it can also be enabled on a per-socket basis.">プログラムまたは構成を介して有効にすることも、ソケット単位で有効にすることもできます。</span> <span class="merged" id="all.4XPxiL.spl2" title="原文 : When configured at the server level, it applies only to the default socket.">サーバー・レベルで構成されている場合、<em>「デフォルト」</em>ソケットにのみ適用されます。</span> </p>

<p><span class="merged" id="all.lqcLj" title="原文 : Programmatically, simply use the enableCompression method during server creation:">プログラム的には、サーバーの作成時に<code>enableCompression</code>メソッドを使用します:</span></p>

<markup
lang="java"

>    WebServer.builder()
             .port(8080)
             .routing(...)
             .enableCompression(true)        // compression enabled
             .build()</markup>

<p><span class="merged" id="all.14fr3v" title="原文 : Or use a config file as follows and make sure the WebServer is created using it:">または、次のように構成ファイルを使用し、それを使用してWebServerが作成されていることを確認します:</span></p>

<markup
lang="yaml"
title="WebServer HTTP圧縮構成ファイル<code>application.yaml</code>"
>server:
  port: 8080
  enable-compression: true</markup>

</div>

<h2 id="_http_compression_negotiation"><span class="merged" id="all.4c3bQ5" title="原文 : HTTP Compression Negotiation">HTTP圧縮ネゴシエーション</span></h2>
<div class="section">
<p><span class="merged" id="all.2nlgGL.spl1" title="原文 : HTTP compression negotiation is controlled by clients using the Accept-Encoding header.">HTTP圧縮ネゴシエーションは、<code>Accept-Encoding</code>ヘッダーを使用してクライアントによって制御されます。</span> <span class="merged" id="all.2nlgGL.spl2" title="原文 : The value of this header is a comma-separated list of encodings.">このヘッダーの値は、エンコーディングのカンマ区切りリストです。</span> <span class="merged" id="all.2nlgGL.spl3" title="原文 : The WebServer will select one of these encodings for compression purposes; it currently supports gzip and deflate.">WebServerは、圧縮のためにこれらのエンコーディングのいずれかを選択します。現在、<code>gzip</code>および<code>deflate</code>をサポートしています。</span> </p>

<p><span class="merged" id="all.4Bisrf" title="原文 : For example, if the request includes Accept-Encoding: gzip, deflate, and HTTP compression has been enabled as shown above, the response shall include the header Content-Encoding: gzip and a compressed payload.">たとえば、リクエストに<code>Accept-Encoding: gzip, deflate</code>が含まれ、前述のようにHTTP圧縮が有効になっている場合、レスポンスにはヘッダー<code>Content-Encoding: gzip</code>と圧縮ペイロードが含まれます。</span></p>

</div>
</doc-view>
