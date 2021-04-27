<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1D4EUP" title="原文 : Fault Tolerance Introduction">フォルト・トレランスの概要</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2X3H8T.spl1" title="原文 : Fault Tolerance is part of the MicroProfile set of specifications.">フォルト・トレランスは、<a href="https://github.com/eclipse/microprofile-fault-tolerance" id="" target="_blank" >specifications</a>のMicroProfileセットの一部です。</span> <span class="merged" id="all.2X3H8T.spl2" title="原文 : This API defines mostly annotations that improve application robustness by providing support to conveniently handle error conditions (faults) that may occur in real-world applications.">このAPIは、ほとんどの場合、実際のアプリケーションで発生する可能性のあるエラー条件(フォルト)を簡単に処理するためのサポートを提供することで、アプリケーションの堅牢性を向上させる注釈を定義します。</span> <span class="merged" id="all.2X3H8T.spl3" title="原文 : Examples include service restarts, network delays, temporal infrastructure instabilities, etc.">たとえば、サービスの再起動、ネットワークの遅延、一時的なインフラストラクチャの不安定性などです。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_fault_tolerance_in_helidon"><span class="merged" id="all.1RJluX" title="原文 : Fault Tolerance in Helidon">Helidonのフォルト・トレランス</span></h2>
<div class="section">
<p><span class="merged" id="all.SnnS7.spl1" title="原文 : The latest implementation of MP Fault Tolerance is built on top of Helidon&rsquo;s SE Fault Tolerance.">MPフォルト・トレランスの最新の実装は、HelidonのSEフォルト・トレランスの上に構築されます。</span> <span class="merged" id="all.SnnS7.spl2" title="原文 : Thus, some configuration for Helidon SE Fault Tolerance also applies to MP.">したがって、Helidon SEフォルト・トレランスの一部の構成はMPにも適用されます。</span> <span class="merged" id="all.SnnS7.spl3" title="原文 : The next section describes some configuration properties that are of particular interest to MP applications.">次の項では、MPアプリケーションに特に重要な構成プロパティについて説明します。</span> </p>


<h3 id="_configuration"><span class="merged" id="all.Pfqvy"  title="原文:: Configuration">構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3xTFGx.spl1" title="原文 : Helidon&rsquo;s implementation uses two types of thread pools: normal and scheduled.">Helidon実装では、次のタイプのスレッド・プールを使用: 通常およびスケジュール済。</span> <span class="merged" id="all.3xTFGx.spl2" title="原文 : The default core size of these executors is 16; however, that can be configured using an application.yaml file as follows:">ただし、これらのエグゼキュータのデフォルトのコア・サイズは16です。これは、次のように<code>application.yaml</code>ファイルを使用して構成できます:</span> </p>

<markup
lang="yaml"

>executor:
  core-pool-size: 8

scheduled-executor:
  core-pool-size: 8</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3ycTie" title="原文 : There is currently no support to configure these executor properties via a microprofile-config.properties file."><code>microprofile-config.properties</code>ファイルを介したこれらのエグゼキュータ・プロパティの構成は、現在<em>「サポートがありません」</em>。</span></p>
</div>
<p><span class="merged" id="all.200Lsz" title="原文 : The complete set of properties available to configure these executors is in ./apidocs/io.helidon.common.configurable/io/helidon/common/configurable/ThreadPoolSupplier.Builder.html#config(io.helidon.config.Config)[ServerThreadPoolSupplier] and ./apidocs/io.helidon.common.configurable/io/helidon/common/configurable/ScheduledThreadPoolSupplier.Builder.html#config(io.helidon.config.Config)[ScheduledThreadPoolSupplier].">これらのエグゼキュータを構成するために使用できるプロパティの完全なセットは、./apidocs/io.helidon.common.configurable/io/helidon/common/configurable/ThreadPoolSupplier.Builder.html#config(io.helidon.config.Config)[ServerThreadPoolSupplier]および./apidocs/io.helidon.common.configurable/io/helidon/common/configurable/ScheduledThreadPoolSupplier.Builder.html#config(io.helidon.config.Config)[ScheduledThreadPoolSupplier]にあります。</span></p>

</div>
</div>
</doc-view>
