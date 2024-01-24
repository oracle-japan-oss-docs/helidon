<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.72"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.71" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4PF3ZG.1" title="原文 : Deserialization setup"><router-link @click.native="this.scrollFix('#_deserialization_setup')" to="#_deserialization_setup">デシリアライズ設定</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1FP8Ic.1" title="原文 : System property configuration"><router-link @click.native="this.scrollFix('#_system_property_configuration')" to="#_system_property_configuration">システム・プロパティ構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.WK5KV.1" title="原文 : Programmatic configuration"><router-link @click.native="this.scrollFix('#_programmatic_configuration')" to="#_programmatic_configuration">プログラム構成</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.87"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2XZRz6.1.spl1" title="原文 : JEP-290 brought support for deserialization filters to Java programming language."><a href="https://openjdk.org/jeps/290" target="_blank">JEP-290</a> Javaプログラミング言語にデシリアライズ・フィルタのサポートがもたらされました。</span> <span class="merged" id="all.2XZRz6.1.spl2" title="原文 : Such filtering allows us to control which classes may be deserialized using Java serialization.">このようなフィルタリングにより、Javaシリアライズを使用して直列化復元されるクラスを制御できます。</span> </p>

</div>


<h2 id="_deserialization_setup"><span class="merged" id="all.2svXZb.1" title="原文 : Deserialization setup">デシリアライズ設定</span></h2>
<div class="section">
<p><span class="merged" id="all.3ucQ2y.1.spl1" title="原文 : Helidon default settings forbids any deserialization except for patterns defined in a pattern property of any META-INF/helidon/serial-config.properties on classpath.">Helidonのデフォルト設定では、クラスパスの<code>META-INF/helidon/serial-config.properties</code>の<code>pattern</code>プロパティで定義されたパターンを除き、デシリアライズが禁止されます。</span> <span class="merged" id="all.3ucQ2y.1.spl2" title="原文 : The patterns are semicolon delimited strings, such as io.myapp.**;java.util.HashMap (any subpackage of io.myapp and class java.util.HashMap).">パターンは、<code>io.myapp.**;java.util.HashMap</code> (<code>io.myapp</code>およびクラス<code>java.util.HashMap</code>のすべてのサブパッケージ)などのセミコロン区切り文字列です。</span> <span class="merged" id="all.3ucQ2y.1.spl3" title="原文 : Helidon will always add a deny-all filter pattern to the end of the pattern string (to make sure we exclude any unspecified class - we only operate on whitelists)">Helidonは、すべての拒否フィルタ・パターンをパターン文字列の末尾に<strong>「常に」</strong>追加します(指定されていないクラスを除外することを確認するため) - ホワイトリストでのみ活動しています)</span> </p>

<p><span class="merged" id="all.1z3Wwj.1" title="原文 : These defaults can be modified either through system properties, or programmatically.">これらのデフォルトは、システム・プロパティまたはプログラムによって変更できます。</span></p>

</div>


<h2 id="_system_property_configuration"><span class="merged" id="all.16gl1x.1" title="原文 : System property configuration">システム・プロパティ構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3Zi6Fq.1" title="原文 : The following system properties can be used to control deserialization in Helidon:">次のシステム・プロパティを使用して、Helidonのデシリアライズを制御できます:</span></p>

<div class="block-title"><span class="merged" id="all.1tV8hR.1"  title="原文:: System properties"><span>システム・プロパティ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 27.273%;">
<col style="width: 27.273%;">
<col style="width: 45.455%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2YtY4s.1"  title="原文:: property">property</span></th>
<th><span class="merged" id="all.G3u1e.152"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.158"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3A2mVn.1"  title="原文: helidon.serialFilter.pattern"><code>helidon.serialFilter.pattern</code></span></td>
<td class=""><span class="merged" id="all.3dRyA4.1"  title="原文: !*"><code>!*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4DMCly.1" title="原文 : Filter pattern to use, deny all is always added">使用するフィルタ・パターン。すべて拒否は常に追加されます</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2EpNWO.1"  title="原文: helidon.serialFilter.ignoreFiles"><code>helidon.serialFilter.ignoreFiles</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.82"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.lFRm0.1" title="原文 : Whether to ignore files META-INF/helidon/serial-config.properties in libraries on the classpath">クラスパス上のライブラリ内のファイル<code>META-INF/helidon/serial-config.properties</code>を無視するかどうか</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3swLpE.1"  title="原文: helidon.serialFilter.failure.action"><code>helidon.serialFilter.failure.action</code></span></td>
<td class=""><span class="merged" id="all.4HU5BJ.1"  title="原文: FAIL"><code>FAIL</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1dhSIZ.1" title="原文 : Action to do when the configuration of global filter exists and is not consistent with our security expectations (e.g. contains a pattern to include all).">グローバル・フィルタの構成が存在し、セキュリティの期待値と一致しない場合に実行するアクション(たとえば、すべてを含めるパターンが含まれます)。</span></p>

<p><span class="merged" id="all.2tuVo8.3"  title="原文:: Options:">オプション:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.42J09r.2" title="原文 : FAIL - throw an exception to terminate startup"><code>FAIL</code> - 起動を終了するために例外をスロー</span></p>

</li>
<li>
<p><span class="merged" id="all.4RZzzy.2" title="原文 : WARN - log a warning"><code>WARN</code> - 警告の記録</span></p>

</li>
<li>
<p><span class="merged" id="all.442R9l.2" title="原文 : IGNORE - ignore this and silently continue"><code>IGNORE</code> - 無視して黙って続ける</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3heHvC.1"  title="原文: helidon.serialFilter.missing.action"><code>helidon.serialFilter.missing.action</code></span></td>
<td class=""><span class="merged" id="all.1V82HD.1"  title="原文: CONFIGURE"><code>CONFIGURE</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.5YSy1.1" title="原文 : Action to do when there is no global configuration.">グローバル構成がない場合に実行するアクション。</span></p>

<p><span class="merged" id="all.2tuVo8.4"  title="原文:: Options:">オプション:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1VvQD4.1" title="原文 : CONFIGURE - configure Helidon defaults"><code>CONFIGURE</code> - Helidonデフォルトの構成</span></p>

</li>
<li>
<p><span class="merged" id="all.42J09r.3" title="原文 : FAIL - throw an exception to terminate startup"><code>FAIL</code> - 起動を終了するために例外をスロー</span></p>

</li>
<li>
<p><span class="merged" id="all.4RZzzy.3" title="原文 : WARN - log a warning"><code>WARN</code> - 警告の記録</span></p>

</li>
<li>
<p><span class="merged" id="all.442R9l.3" title="原文 : IGNORE - ignore this and silently continue"><code>IGNORE</code> - 無視して黙って続ける</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1DVx2x.1"  title="原文: helidon.serialFilter.trace"><code>helidon.serialFilter.trace</code></span></td>
<td class=""><span class="merged" id="all.10P0gX.4"  title="原文: NONE"><code>NONE</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3e7wAH.1.spl1" title="原文 : Tracing configuration for deserialization.">デシリアライズのトレース構成。</span> <span class="merged" id="all.3e7wAH.1.spl2" title="原文 : Controls what information (if any) will be logged to a logger io.helidon.common.SerializationConfig.TracingObjectInputFilter in INFO log level."><code>INFO</code>ログ・レベルでログ出力<code>io.helidon.common.SerializationConfig.TracingObjectInputFilter</code>に記録される情報(ある場合)を制御します。</span> </p>

<p><span class="merged" id="all.2tuVo8.5"  title="原文:: Options:">オプション:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1JU7GL.1" title="原文 : NONE - do not trace"><code>NONE</code> - トレースしない</span></p>

</li>
<li>
<p><span class="merged" id="all.2GSbHi.1" title="原文 : BASIC - trace only classes, and only once per class"><code>BASIC</code> - トレースのみクラス、およびクラスごとに1回のみ</span></p>

</li>
<li>
<p><span class="merged" id="all.18yUCQ.1" title="原文 : FULL - trace all deserialization filter requests"><code>FULL</code> - すべてのデシリアライズ・フィルタ・リクエストをトレース</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_programmatic_configuration"><span class="merged" id="all.2FxysX.1" title="原文 : Programmatic configuration">プログラム構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2A4VrT.1" title="原文 : Custom SerializationConfig may be registered, but it must be done before Helidon server is started.">カスタム<code>SerializationConfig</code>は登録できますが、Helidonサーバーを起動する前に行う必要があります。</span></p>

<markup
lang="java"
title="Configure custom Helidon serialization config"
>SerializationConfig.builder()
  .traceSerialization(SerializationConfig.TraceOption.BASIC) <span class="conum" data-value="1" />
  .filterPattern(MyType.class.getName())                     <span class="conum" data-value="2" />
  .ignoreFiles(true)                                         <span class="conum" data-value="3" />
  .onWrongConfig(SerializationConfig.Action.IGNORE)          <span class="conum" data-value="4" />
  .build()
  .configure();                                              <span class="conum" data-value="5" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.D8xiv.1" title="原文 : Trace first instance of each class that is deserialized">直列化復元される各クラスの最初のインスタンスをトレース</span></li>
<li data-value="2"><span class="merged" id="all.364mKD.1" title="原文 : Configure a single class filter pattern (only allows deserialization of class MyType">単一のクラス・フィルタ・パターンを構成します(クラス<code>MyType</code>のデシリアライズのみを許可します)</span></li>
<li data-value="3"><span class="merged" id="all.25MSmR.1" title="原文 : Ignore files defined in META-INF/helidon/serial-config.properties">META-INF/helidon/serial-config.propertiesで定義されているファイルを無視</span></li>
<li data-value="4"><span class="merged" id="all.2pqTU0.1" title="原文 : In case there is an existing global serialization configuration on JDK, ignore it and continue (global filter cannot be reconfigured)">JDKに既存のグローバル・シリアライズ構成がある場合、それを無視して続行します(グローバル・フィルタを再構成できません)</span></li>
<li data-value="5"><span class="merged" id="all.1HABpS.1" title="原文 : Configure this serialization config as the default for this JVM">このシリアル化構成をこのJVMのデフォルトとして構成</span></li>
</ul>

</div>

</doc-view>
