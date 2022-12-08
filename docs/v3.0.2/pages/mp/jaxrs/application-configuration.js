<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2Z9Fg3"  title="原文:: Configuring the Application">アプリケーションの構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.19m8gz.spl1" title="原文 : Your application can use the MicroProfile Config or Helidon Config (or both).">アプリケーションでは、MicroProfile構成またはHelidon構成(あるいはその両方)を使用できます。</span> <span class="merged" id="all.19m8gz.spl2" title="原文 : MicroProfile Config offers portability to other MicroProfile servers.">MicroProfile Configは、他のMicroProfileサーバーへの移植性を提供します。</span> <span class="merged" id="all.19m8gz.spl3" title="原文 : Helidon Config supports a full tree structure, including repeating elements.">Helidon Configは、繰返し要素を含む完全なツリー構造をサポートしています。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuring_the_application"><span class="merged" id="all.2Z9Fg3.1"  title="原文:: Configuring the Application">アプリケーションの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1J4Em7" title="原文 : You can inject values that the application can access from both MicroProfile Config and from Helidon Config.">アプリケーションがMicroProfile ConfigとHelidon Configの両方からアクセスできる値をインジェクトできます。</span></p>

<markup
lang="java"
title="JAX-RS - inject a single config property"
>@Inject
public MyResource(@ConfigProperty(name="app.name") String appName) {
    this.applicationName = appName;
}</markup>

<p><span class="merged" id="all.4YLWZS" title="原文 : You can also inject the whole configuration instance, either io.helidon.config.Config or org.eclipse.microprofile.config.Config."><code>io.helidon.config.Config</code>または<code>org.eclipse.microprofile.config.Config</code>のいずれかの構成インスタンス全体をインジェクトすることもできます。</span></p>

<markup
lang="java"
title="JAX-RS - inject config"
>@Inject
public MyResource(Config config) {
    this.config = config;
}</markup>

</div>

</doc-view>
