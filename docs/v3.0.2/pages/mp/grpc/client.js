<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.7"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.5" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.5" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.4" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.5" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.2" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.4" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.5"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3Tx30k.spl1" title="原文 : Building Java-based gRPC clients using the Helidon MP gRPC APIs is very simple and removes a lot of the boilerplate code typically associated to more traditional approaches of writing gRPC Java clients.">Helidon MP gRPC APIを使用してJavaベースのgRPCクライアントを構築することは非常に簡単であり、通常gRPC Javaクライアントの記述の従来のアプローチに関連した多くのボイラープレート・コードを削除します。</span> <span class="merged" id="all.3Tx30k.spl2" title="原文 : At its simplest, a gRPC Java client can be written using nothing more than a suitably annotated interface.">最もシンプルなことに、gRPC Javaクライアントは、適切に注釈付けされたインタフェースだけを使用して記述できます。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.5"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1sm7O6" title="原文 : To enable gRPC MicroProfile Clients add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">gRPC MicroProfileクライアントを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.grpc&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-grpc-client&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.4"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.y650a" title="原文 : The following annotations are used to work with Helidon MP gRPC clients:">Helidon MP gRPCクライアントを操作するには、次の注釈を使用します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3nVuX4" title="原文 : @GrpcChannel - an annotation used to inject a gRPC channel."><code>@GrpcChannel</code> - gRPCチャネルをインジェクトするために使用される注釈。</span></p>

</li>
<li>
<p><span class="merged" id="all.4Rizbh" title="原文 : @InProcessGrpcChannel - an annotation used to tell the Helidon MP gRPC API to inject an in-process channel."><code>@InProcessGrpcChannel</code> - Helidon MP gRPC APIにインプロセス・チャネルをインジェクトするように指示するために使用される注釈。</span></p>

</li>
<li>
<p><span class="merged" id="all.14LUKT" title="原文 : @GrpcProxy - an annotation used to mark an injection point for a gRPC service client proxy."><code>@GrpcProxy</code> - gRPCサービス・クライアント・プロキシのインジェクション・ポイントをマークするために使用される注釈。</span></p>

</li>
<li>
<p><span class="merged" id="all.1LRmjS" title="原文 : @Grpc - an annotation used to mark a class as representing a gRPC service."><code>@Grpc</code> - クラスをgRPCサービスを表すために使用する注釈。</span></p>

</li>
</ul>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.5"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.39IqkF.spl1" title="原文 : For a gRPC client to connect to a server, it requires a Channel.">gRPCクライアントがサーバーに接続するには、チャネルが必要です。</span> <span class="merged" id="all.39IqkF.spl2" title="原文 : The Helidon MP gRPC APIs provide a way to inject channels into CDI beans that require them.">Helidon MP gRPC APIは、チャネルを必要とするCDI beanにチャネルをインジェクトする方法を提供します。</span> </p>

<p><span class="merged" id="all.45402X.1" title="原文 : Type: io.helidon.grpc.client.GrpcChannelDescriptor">タイプ: <a href="./apidocs/io.helidon.grpc.client/io/helidon/grpc/client/GrpcChannelDescriptor.html" target="_blank">io.helidon.grpc.client.GrpcChannelDescriptor</a></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.66"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.67" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.79"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.77"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.79"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.80"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.10"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.181"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3XTPrz.1"  title="原文: localhost"><code>localhost</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.46MYtu.1" title="原文 : Set the host name to connect.">接続するホスト名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.11"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.48"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1eyLYf.2"  title="原文: 1408"><code>1408</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2sPFbS.1" title="原文 : Set the port that will be used to connect to the server.">サーバーへの接続に使用するポートを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2qMA9k.1"  title="原文: target"><code>target</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.182"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3d9LAX.1" title="原文 : Set the target string, which can be either a valid io.grpc.NameResolver compliant URI, or an authority string.">ターゲット文字列を設定します。有効なio.grpc.NameResolver準拠のURIまたは認可文字列のいずれかです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.5"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2vOda7.1" title="原文 : GrpcTlsDescriptor"><router-link to="/config/io_helidon_grpc_core_GrpcTlsDescriptor">GrpcTlsDescriptor</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1txT8H.1.spl1" title="原文 : Set the GrpcTlsDescriptor.">GrpcTlsDescriptorを設定します。</span> <span class="merged" id="all.1txT8H.1.spl2" title="原文 : If tlsDescriptor is null or if the tlsDescriptor.isEnabled() is false, then no TLS will be used."><code>tlsDescriptor</code>がnullの場合、または<code>tlsDescriptor.isEnabled()</code>がfalseの場合、TLSは使用されません。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.1JjN3e.spl1" title="原文 : Channels are configured in the grpc section of the Helidon application configuration.">チャネルは、Helidonアプリケーション構成の<code>grpc</code>セクションで構成されます。</span> <span class="merged" id="all.1JjN3e.spl2" title="原文 : The examples below use an application.yaml file but there are many other ways to use and override configuration in Helidon">次の例では<code>application.yaml</code>ファイルを使用していますが、<router-link to="/mp/config/introduction">「Helidonでの構成」</router-link>を使用およびオーバーライドする方法は他にも多数あります</span> </p>

<markup
lang="yaml"
title="General form of a gRPC channels configuration"
>grpc:
  channels:  <span class="conum" data-value="1" />
    test-server:  <span class="conum" data-value="2" />
      host: localhost  <span class="conum" data-value="3" />
      port: 1408  <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2f8naW" title="原文 : Channels are configured in the channels section.">チャネルは、<code>channels</code>セクションで構成されます。</span></li>
<li data-value="2"><span class="merged" id="all.3983IK" title="原文 : Each subsection is the channel name that is then used to refer to this channel in the application code.">各サブセクションは、アプリケーション・コードでこのチャネルを参照するために使用されるチャネル名です。</span></li>
<li data-value="3"><span class="merged" id="all.2OtKx3" title="原文 : Each channel contains a host name.">各チャネルにはホスト名が含まれます。</span></li>
<li data-value="4"><span class="merged" id="all.2eMipR" title="原文 : It also contains a port.">ポートも含まれています。</span></li>
</ul>

<p><span class="merged" id="all.3pmrvP" title="原文 : While most client application only connect to a single server, it is possible to configure multiple named channels if the client needs to connect to multiple servers.">ほとんどのクライアント・アプリケーションは1つのサーバーにのみ接続しますが、クライアントが複数のサーバーに接続する必要がある場合、複数の名前付きチャネルを構成できます。</span></p>

<markup
lang="yaml"
title="Multiple gRPC Channels configuration example"
>grpc:
  channels:
    london:
      host: london.foo.com
      port: 1408
    new-york:
      host: ny.foo.com
      port: 1408</markup>

<p><span class="merged" id="all.1naXFs" title="原文 : The above example shows two channel configurations, one named london and the other new-york.">前述の例は、<code>london</code>という名前のチャネル構成と、他の<code>new-york</code>という名前のチャネル構成を示しています。</span></p>

</div>


<h3 id="_configuring_tls"><span class="merged" id="all.3iyelh" title="原文 : Configuring TLS">TLSの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2VKu8W" title="原文 : It is also possible to configure a Channel to use TLS if the server is using TLS.">サーバーがTLSを使用している場合は、TLSを使用するようにチャネルを構成することもできます。</span></p>


<h4 id="_grpctlsdescriptor_grpc_core_configuration"><span class="merged" id="all.kVwil.1" title="原文 : GrpcTlsDescriptor (grpc.core) Configuration">GrpcTlsDescriptor (grpc.core)構成</span></h4>
<div class="section">
<p><span class="merged" id="all.1OogWp.1" title="原文 : Type: io.helidon.grpc.core.GrpcTlsDescriptor">タイプ: <a href="./apidocs/io.helidon.grpc.core/io/helidon/grpc/core/GrpcTlsDescriptor.html" target="_blank">io.helidon.grpc.core.GrpcTlsDescriptor</a></span></p>


<h5 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.67"  title="原文:: Configuration options">構成オプション</span></h5>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.68" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.80"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.78"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.80"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.81"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.16"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.104"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.51"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.fx3jQ.1.spl1" title="原文 : Enable or disable TLS.">TLSを有効または無効にします。</span> <span class="merged" id="all.fx3jQ.1.spl2" title="原文 : If enabled is false, then the rest of the TLS configuration properties are ignored.">有効がfalseの場合、残りのTLS構成プロパティは無視されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4XneaQ.1"  title="原文: jdk-ssl"><code>jdk-ssl</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.105"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.43"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1oq2j7.1" title="原文 : Sets the type of SSL implementation to be used.">使用するSSL実装のタイプを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.V55FM.1"  title="原文: tls-ca-cert"><code>tls-ca-cert</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.18" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3kg1au.1" title="原文 : Set the CA (certificate authority) certificate path.">CA (認証局)証明書パスを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.36vT8q.1"  title="原文: tls-cert"><code>tls-cert</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.19" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1yl1au.1.spl1" title="原文 : Set the client tlsCert path.">クライアントのtlsCertパスを設定します。</span> <span class="merged" id="all.1yl1au.1.spl2" title="原文 : Required only if mutual auth is desired.">相互認証が必要な場合にのみ必要です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.40cKmH.1"  title="原文: tls-key"><code>tls-key</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.20" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Y0LW5.1.spl1" title="原文 : Set the client private key path.">クライアントの秘密キー・パスを設定します。</span> <span class="merged" id="all.1Y0LW5.1.spl2" title="原文 : Required only if mutual auth is desired.">相互認証が必要な場合にのみ必要です。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<markup
lang="yaml"
title="TLS on gRPC Channels configuration example"
>grpc:
  channels:
    test-server:
      host: localhost
      port: 1408
      tls:  <span class="conum" data-value="1" />
        enabled: true  <span class="conum" data-value="2" />
        tls-cert-path: /certs/foo.cert  <span class="conum" data-value="3" />
        tls-key-path: /certs/foo.key  <span class="conum" data-value="4" />
        tls-ca-cert-path: /certs/ca.cert  <span class="conum" data-value="5" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1eTPJ1" title="原文 : The tls section of the channel configuration is used to configure TLS.">チャネル構成の<code>tls</code>セクションを使用してTLSを構成します。</span></li>
<li data-value="2"><span class="merged" id="all.fWHWf" title="原文 : The enabled value is used to enable or disable TLS for this channel."><code>enabled</code>値は、このチャネルのTLSを有効または無効にするために使用されます。</span></li>
<li data-value="3"><span class="merged" id="all.1Y9CyM" title="原文 : The tls-cert value is the location of the TLS certificate file."><code>tls-cert</code>値は、TLS証明書ファイルのロケーションです。</span></li>
<li data-value="4"><span class="merged" id="all.Pc7xl" title="原文 : The tls-key value is the location of the TLS key file."><code>tls-key</code>値は、TLSキー・ファイルのロケーションです。</span></li>
<li data-value="5"><span class="merged" id="all.4fOxsC" title="原文 : The tls-ca-cert value is the location of the TLS CA certificate file."><code>tls-ca-cert</code>値は、TLS CA証明書ファイルのロケーションです。</span></li>
</ul>

<p><span class="merged" id="all.4dDlur.spl1" title="原文 : The SSL configuration uses the Helidon Resource class to locate configured keys and certificates.">SSL構成では、Helidon <code>Resource</code>クラスを使用して、構成済のキーおよび証明書を検索します。</span> <span class="merged" id="all.4dDlur.spl2" title="原文 : In the example above the tls-cert-path config key has the -path suffix which tells the configuration to load /certs/foo.cert as a file.">前述の例では、<code>tls-cert-path</code>構成キーに、<code>/certs/foo.cert</code>をファイルとしてロードするように構成に指示する<code>-path</code>サフィクスがあります。</span> <span class="merged" id="all.4dDlur.spl3" title="原文 : If /certs/foo.cert was a resource on the classpath, the configuration key could have been changed to tls-cert-resource-path to load /certs/foo.cert from the classpath."><code>/certs/foo.cert</code>がクラスパスのリソースであった場合、構成キーが<code>tls-cert-resource-path</code>に変更され、クラスパスから<code>/certs/foo.cert</code>をロードできます。</span> <span class="merged" id="all.4dDlur.spl4" title="原文 : The same applies to the tls-key and tls-ca-cert configuration keys."><code>tls-key</code>および<code>tls-ca-cert</code>の構成キーにも同じことが当てはまります。</span> <span class="merged" id="all.4dDlur.spl5" title="原文 : See the io.helidon.common.configurable.Resource class for details.">詳細は、<code>io.helidon.common.configurable.Resource</code>クラスを参照してください。</span> </p>

</div>

</div>

</div>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.2"  title="原文:: Usage">使用方法</span></h2>
<div class="section">

<h3 id="_using_channels"><span class="merged" id="all.WvAIz"  title="原文:: Using Channels">チャネルの使用方法</span></h3>
<div class="section">
<p><span class="merged" id="all.1Xag64.spl1" title="原文 : Once one or more channels have been configured, then they can be used by the client code.">1つ以上のチャネルを構成したら、クライアント・コードで使用できます。</span> <span class="merged" id="all.1Xag64.spl2" title="原文 : The simplest way to use a channel is to inject it into beans using CDI.">チャネルを使用する最も簡単な方法は、CDIを使用してそれをBeanにインジェクトすることです。</span> <span class="merged" id="all.1Xag64.spl3" title="原文 : The Helidon gRPC client APIs have CDI producers that can provide io.grpc.Channel instances.">Helidon gRPCクライアントAPIには、<code>io.grpc.Channel</code>インスタンスを提供できるCDIプロデューサがあります。</span> </p>

<p><span class="merged" id="all.2wSilN" title="原文 : For example, a class might have an injectable io.grpc.Channel field:">たとえば、クラスにインジェクト可能な<code>io.grpc.Channel</code>フィールドがあるとします:</span></p>

<markup
lang="java"
title="gRPC Channel Injection"
>    @Inject  <span class="conum" data-value="1" />
    @GrpcChannel(name = "test-server")  <span class="conum" data-value="2" />
    private Channel channel;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1XulD6" title="原文 : The @Inject annotation tells CDI to inject the channel."><code>@Inject</code>注釈は、チャネルをインジェクトするようCDIに指示します。</span></li>
<li data-value="2"><span class="merged" id="all.1A0Y5g.spl1" title="原文 : The @GrpcChannel annotation is the qualifier that supplies the Channel name."><code>@GrpcChannel</code>注釈は、チャネル名を提供する修飾子です。</span> <span class="merged" id="all.1A0Y5g.spl2" title="原文 : This is the same name as used in the channel configuration in the examples provided in the configuration section.">これは、<router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">「構成セクション」</router-link>の例でチャネル構成で使用される名前と同じです。</span> </li>
</ul>

<p><span class="merged" id="all.rBTyA" title="原文 : When an instance of the CDI bean with the channel field is instantiated, a channel will be injected into it.">チャネル・フィールドを持つCDI beanのインスタンスがインスタンス化されると、チャネルがインジェクトされます。</span></p>


<h4 id="_the_in_process_channel"><span class="merged" id="all.2gL1dd" title="原文 : The In-Process Channel">インプロセス・チャネル</span></h4>
<div class="section">
<p><span class="merged" id="all.2sBKSQ.spl1" title="原文 : If code is running in an application that is executing as part of the Helidon MP gRPC server, there is a special in-process channel available.">Helidon MP gRPCサーバーの一部として実行されているアプリケーションでコードが実行されている場合、特別なプロセス内チャネルを使用できます。</span> <span class="merged" id="all.2sBKSQ.spl2" title="原文 : This allows code executing on the server to make calls to gRPC services deployed on that server in the same way an external client does.">これにより、サーバー上で実行されているコードは、外部クライアントと同じ方法で、そのサーバーにデプロイされているgRPCサービスを呼び出すことができます。</span> <span class="merged" id="all.2sBKSQ.spl3" title="原文 : To inject an in-process channel, a different qualifier annotation is used.">処理中のチャネルをインジェクトするには、別の修飾子注釈が使用されます。</span> </p>

<markup
lang="java"
title="gRPC in-Process Channel Injection"
>    @Inject  <span class="conum" data-value="1" />
    @InProcessGrpcChannel  <span class="conum" data-value="2" />
    private Channel channel;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2SF1lr" title="原文 : The @Inject annotation tells CDI to identify the injectable qualifiers."><code>@Inject</code>注釈は、CDIに、インジェクタブルな修飾子を識別するように指示します。</span></li>
<li data-value="2"><span class="merged" id="all.1i7v5U" title="原文 : The @InProcessGrpcChannel is the qualifier that is used to tell the Helidon MP gRPC API to inject an in-process channel."><code>@InProcessGrpcChannel</code>は、インプロセス・チャネルをインジェクトするようにHelidon MP gRPC APIに指示するために使用される修飾子です。</span></li>
</ul>

</div>

</div>


<h3 id="_using_the_client_interface_in_an_application"><span class="merged" id="all.1WKZUM" title="原文 : Using the Client Interface in an Application">アプリケーションでのクライアント・インタフェースの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.4CKvjb.spl1" title="原文 : Now that there is a client interface and a Channel configuration, we can then use these in the client application.">クライアント・インタフェースおよびチャネル構成が存在するため、これらをクライアント・アプリケーションで使用できます。</span> <span class="merged" id="all.4CKvjb.spl2" title="原文 : The simplest way is to use the client in a CDI microprofile application.">最も簡単な方法は、CDIマイクロプロファイル・アプリケーションでクライアントを使用することです。</span> </p>

<p><span class="merged" id="all.3o8GDu.spl1" title="原文 : We can declare a field of the same type as the client service interface in the application class that requires the client.">クライアントを必要とするアプリケーション・クラスのクライアント・サービス・インタフェースと同じタイプのフィールドを宣言できます。</span> <span class="merged" id="all.3o8GDu.spl2" title="原文 : The field is then annotated so that CDI will inject the client proxy into the field.">CDIがクライアント・プロキシをフィールドにインジェクトするように、フィールドに注釈が付けられます。</span> </p>

<markup
lang="java"
title="Simple gRPC Service"
>@ApplicationScoped
public class Client {

    @Inject  <span class="conum" data-value="1" />
    @GrpcProxy  <span class="conum" data-value="2" />
    @GrpcChannel(name = "test-server")  <span class="conum" data-value="3" />
    private StringService stringService;
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.6oFvY" title="原文 : The @Inject annotation tells the CDI to inject the client implementation."><code>@Inject</code>注釈は、クライアント実装をインジェクトするようにCDIに指示します。</span></li>
<li data-value="2"><span class="merged" id="all.3ZKH8k" title="原文 : The @GrpcProxy annotation is used by the CDI container to match the injection point to the gRPC MP APIs provider."><code>@GrpcProxy</code>注釈は、gRPC MP APIプロバイダへのインジェクション・ポイントと一致するためにCDIコンテナによって使用されます。</span></li>
<li data-value="3"><span class="merged" id="all.4KUOdG.spl1" title="原文 : The @GrpcChannel annotation identifies the gRPC channel to be used by the client."><code>@GrpcChannel</code>注釈は、クライアントによって使用されるgRPCチャネルを識別します。</span> <span class="merged" id="all.4KUOdG.spl2" title="原文 : The name used in the annotation refers to a channel name in the application configuration.">注釈で使用される名前は、アプリケーション構成内のチャネル名を参照します。</span> </li>
</ul>

<p><span class="merged" id="all.2ydUef" title="原文 : When the CDI container instantiates instances of the Client, it will inject a dynamic proxy into the stringService field and then any code in methods in the Client class can call methods on the StringService which will be translated to gRPC calls.">CDIコンテナは、<code>Client</code>のインスタンスをインスタンス化すると、動的プロキシを<code>stringService</code>フィールドにインジェクトし、<code>Client</code>クラスのメソッドのコードは、gRPCコールに変換される<code>StringService</code>のメソッドをコールできます。</span></p>

<p><span class="merged" id="all.3LuP7S.spl1" title="原文 : In the example above, there is no need to use a Channel directly.">前述の例では、<code>Channel</code>を直接使用する必要はありません。</span> <span class="merged" id="all.3LuP7S.spl2" title="原文 : The correct channel is added to the dynamic client proxy internally by the Helidon MP gRPC APIs.">Helidon MP gRPC APIによって、動的クライアント・プロキシに適切なチャネルが内部的に追加されます。</span> </p>

</div>


<h3 id="_building_a_grpc_client"><span class="merged" id="all.cbths" title="原文 : Building a gRPC Client">gRPCクライアントのビルド</span></h3>
<div class="section">
<p><span class="merged" id="all.3ocz0P" title="原文 : There are a few steps to building and using a gRPC client in Helidon MP.">Helidon MPでgRPCクライアントをビルドおよび使用するには、いくつかのステップがあります。</span></p>

<p><span class="merged" id="all.1bjZCr" title="原文 : As discussed in the Defining Service methods section of the Server-Side Services, there are four different types of gRPC method."><router-link to="/mp/grpc/server">「サーバー側サービス」</router-link>の<router-link :to="{path: '/mp/grpc/server', hash: '#_defining_service_methods'}">「サービス・メソッドの定義」</router-link>セクションで説明したように、4タイプのgRPCメソッドがあります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.25GSA8" title="原文 : Unary - a simple method with at most a single request value and returning at most a single response value."><code>Unary</code> - 最大で単一のリクエスト値を持ち、最大で単一のレスポンス値を返す単純なメソッド。</span></p>

</li>
<li>
<p><span class="merged" id="all.4Aeby4" title="原文 : Server Streaming - a method that takes at most a single request value but may return zero or more response values."><code>Server Streaming</code> - 最大で単一のリクエスト値を取り、ゼロ個以上のレスポンス値を返すことができるメソッド。</span></p>

</li>
<li>
<p><span class="merged" id="all.2QsCZl" title="原文 : Client Streaming - a request that takes one or more request values and returns at most one response value."><code>Client Streaming</code> - 1つ以上のリクエスト値を取り、最大1つのレスポンス値を返すリクエスト。</span></p>

</li>
<li>
<p><span class="merged" id="all.3oou88" title="原文 : Bi-directional Streaming - a method that can take one or more request values and return zero or more response values."><code>Bi-directional Streaming</code> - 1つ以上のリクエスト値を取り、ゼロ個以上のレスポンス値を返すことができるメソッド。</span></p>

</li>
</ul>

<p><span class="merged" id="all.3rVdAK" title="原文 : And as with the server-side APIs, the Helidon MP gRPC client APIs support a number of different method signatures for each of the different gRPC method types.">また、サーバー側のAPIと同様に、Helidon MP gRPCクライアントAPIは、様々なgRPCメソッド・タイプごとに様々なメソッド・シグネチャをサポートしています。</span></p>


<h4 id="_the_client_service_interface"><span class="merged" id="all.2k8oYh" title="原文 : The Client Service Interface">クライアント・サービス・インタフェース</span></h4>
<div class="section">
<p><span class="merged" id="all.1uMpe7" title="原文 : The next step is to produce an interface with the service methods that the client requires.">次のステップでは、クライアントが必要とするサービス・メソッドとのインタフェースを生産します。</span></p>

<p><span class="merged" id="all.3yE7uD" title="原文 : For example, suppose we have a simple server side service that has a unary method to convert a string to uppercase.">たとえば、文字列を大文字に変換する単項メソッドを持つ単純なサーバー側サービスがあるとします。</span></p>

<markup
lang="java"
title="Simple gRPC Service"
>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc
public interface StringService {

    @io.helidon.microprofile.grpc.core.Unary
    public String upper(String s) {
        return s == null ? null : s.toUpperCase();
    }
}</markup>

<p><span class="merged" id="all.1iCLSV.spl1" title="原文 : The service has been written using the Helidon MP APIs but could just as easily be a traditional gRPC Java service generated from Protobuf files.">このサービスはHelidon MP APIを使用して記述されていますが、Protobufファイルから生成された従来のgRPC Javaサービスと同じくらい簡単になる可能性があります。</span> <span class="merged" id="all.1iCLSV.spl2" title="原文 : The client API is agnostic of the server side implementation, it only cares about the method types, the request and response types and the type of Marshaller used to serialize the request and response.">クライアントAPIはサーバー側実装に依存せず、メソッド・タイプ、リクエスト・タイプとレスポンス・タイプ、およびリクエストとレスポンスの直列化に使用されるマーシャラのタイプのみを考慮します。</span> </p>

<p><span class="merged" id="all.3VTqhB" title="原文 : To write a client for the StringService, all that is required is an interface.">StringServiceのクライアントを記述するには、必要なものはすべてインタフェースです。</span></p>

<markup
lang="java"
title="Simple gRPC Service"
>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc
public interface StringService {

    @io.helidon.microprofile.grpc.core.Unary
    public String upper(String s);
}</markup>

<p><span class="merged" id="all.28nQpF.spl1" title="原文 : There is no need to write any code to implement the client.">クライアントを実装するためにコードを記述する必要はありません。</span> <span class="merged" id="all.28nQpF.spl2" title="原文 : The Helidon MP gRPC APIs will create a dynamic proxy for the interface using the information from the annotations and method signatures.">Helidon MP gRPC APIは、注釈およびメソッド・シグネチャからの情報を使用して、インタフェースの動的プロキシを作成します。</span> </p>

<p><span class="merged" id="all.C3r0U.spl1" title="原文 : The interface in the example above used the same method signature as the server but this does not have to be the case.">前述の例のインタフェースは、サーバーと同じメソッド・シグネチャを使用していましたが、これに該当する必要はありません。</span> <span class="merged" id="all.C3r0U.spl2" title="原文 : It could have used any supported signature for a unary method.">単項メソッドでサポートされているすべてのシグネチャを使用した可能性があります。</span> <span class="merged" id="all.C3r0U.spl3" title="原文 : For example, it could just have easily been written using the standard unary method signature:">たとえば、標準の単項メソッド・シグネチャを使用して簡単に記述できます:</span> </p>

<markup
lang="java"
title="Simple gRPC Service"
>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc
public interface StringService {

    @io.helidon.microprofile.grpc.core.Unary
    public void upper(String s, StreamObserver&lt;String&gt; response);
}</markup>

<p><span class="merged" id="all.2h5Cqj" title="原文 : We could also have made the client asynchronous by using one of the async method signatures:">非同期メソッド・シグネチャのいずれかを使用して、クライアントを非同期にすることもできます:</span></p>

<markup
lang="java"
title="Simple gRPC Service"
>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc
public interface StringService {

    @io.helidon.microprofile.grpc.core.Unary
    public CompletableFuture&lt;String&gt; upper(String s);
}</markup>

</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.4"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.jspZz" title="原文 : Basic gRPC Client example demonstrates a simple gRPC client that invokes services from deployed gRPC server applications provided in the Basic gRPC Server and gRPC Server metrics examples."><a href="https://github.com/oracle/helidon/tree/master/examples/grpc/microprofile/basic-client" target="_blank">「基本的なgRPCクライアント」</a>の例は、<a href="https://github.com/oracle/helidon/tree/master/examples/grpc/microprofile/basic-server-implicit" target="_blank">「基本的なgRPCサーバー」</a>および<a href="https://github.com/oracle/helidon/tree/master/examples/grpc/microprofile/metrics" target="_blank">「gRPCサーバー・メトリクス」</a>の例で提供されるデプロイされたgRPCサーバー・アプリケーションからサービスを呼び出す単純なgRPCクライアントを示しています。</span></p>

</div>

</doc-view>
