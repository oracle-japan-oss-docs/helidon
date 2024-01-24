<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.70"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.69" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.51" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.46" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.40" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.30xSxc" title="原文 : Cron"><router-link @click.native="this.scrollFix('#_cron')" to="#_cron">Cron</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.48QYIp" title="原文 : Fixed Rate"><router-link @click.native="this.scrollFix('#_fixed_rate')" to="#_fixed_rate">固定レート</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.40" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.24" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.85"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2isXYf.1.spl1" title="原文 : Scheduling is an essential feature for the Enterprise.">スケジューリングは、企業にとって不可欠な機能です。</span> <span class="merged" id="all.2isXYf.1.spl2" title="原文 : Helidon has its own implementation of Scheduling functionality based on Cron-utils.">Helidonには、<a href="https://github.com/jmrozanec/cron-utils" target="_blank">Cron-utils</a>に基づいたスケジューリング機能の独自の実装があります。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.62"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1OtigJ.1" title="原文 : To enable Scheduling add the following dependency to your project’s pom.xml (see Managing Dependencies).">スケジューリングを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.scheduling&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-scheduling&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.65"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.25O8ep" title="原文 : For scheduling periodic tasks, it is possible to choose a fixed rate or a Cron expression.">定期タスクをスケジュールする場合、固定レートまたはCron式を選択できます。</span></p>


<h3 id="_fixed_rate"><span class="merged" id="all.2XeJts.2"  title="原文:: Fixed rate">固定レート</span></h3>
<div class="section">
<markup
lang="java"
title="Scheduling with fixed rate use <code>Scheduling.fixedRate()</code> builder."
>Scheduling.fixedRate()
        .delay(10)
        .initialDelay(5)
        .timeUnit(TimeUnit.MINUTES)
        .task(inv -&gt; System.out.println("Every 10 minutes, first invocation 5 minutes after start"))
        .build();</markup>

<p><span class="merged" id="all.25WewY" title="原文 : Metadata like human-readable interval description or configured values are available through FixedRateInvocation provided as task parameter.">判読可能な間隔の説明や構成された値などのメタデータは、タスク・パラメータとして提供されるFixedRateInvocationを介して使用できます。</span></p>

<markup
lang="java"
title="Invocation metadata"
>Scheduling.fixedRate()
        .delay(10)
        .task(inv -&gt; System.out.println("Method invoked " + inv.description()))
        .build();</markup>

<p><span class="merged" id="all.kIQL3.1" title="原文 : Type: io.helidon.scheduling.FixedRate">タイプ: <a href="/apidocs/io.helidon.scheduling/io/helidon/scheduling/FixedRate.html" target="_blank">io.helidon.scheduling.FixedRate</a></span></p>


<h4 id="_configuration_options"><span class="merged" id="all.3SKgM1.136"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.7" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.148"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.143"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.148"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.154"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.lGKge.5"  title="原文: delay"><code>delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.35"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Fj2e1.1.spl1" title="原文 : Fixed rate delay between each invocation.">各呼出し間の固定レート遅延。</span> <span class="merged" id="all.3Fj2e1.1.spl2" title="原文 : Time unit is by default java.util.concurrent.TimeUnit#SECONDS, can be specified with io.helidon.scheduling.Scheduling.FixedRateBuilder#timeUnit(java.util.concurrent.TimeUnit).">時間単位は、デフォルトではjava.util.concurrent.TimeUnit#SECONDSで、io.helidon.scheduling.Scheduling.FixedRateBuilder#timeUnit(java.util.concurrent.TimeUnit)で指定できます。</span> </p>

<markup>@return delay between each invocation</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.129" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.149"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.144"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.149"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.155"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.DEUw2.1"  title="原文: delay-type"><code>delay-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.165MJP.1" title="原文 : DelayType (SINCE_PREVIOUS_START, SINCE_PREVIOUS_END)">DelayType (SINCE_PREVIOUS_START, SINCE_PREVIOUS_END)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2v39hN.1"  title="原文: @io.helidon.scheduling.FixedRate.DelayType@.SINCE_PREVIOUS_START"><code>@io.helidon.scheduling.FixedRate.DelayType@.SINCE_PREVIOUS_START</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2gIoHu.1.spl1" title="原文 : Configure whether the delay between the invocations should be calculated from the time when previous task started or ended.">前のタスクが開始または終了した時点から呼出し間の遅延を計算するかどうかを構成します。</span> <span class="merged" id="all.2gIoHu.1.spl2" title="原文 : Delay type is by default FixedRate.DelayType#SINCE_PREVIOUS_START.">遅延タイプは、デフォルトではFixedRate.DelayType#SINCE_PREVIOUS_STARTです。</span> </p>

<markup>@return delay type</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.QiGde.2"  title="原文: initial-delay"><code>initial-delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.36"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.10"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Yo3p.1.spl1" title="原文 : Initial delay of the first invocation.">最初の呼出しの初期遅延。</span> <span class="merged" id="all.Yo3p.1.spl2" title="原文 : Time unit is by default java.util.concurrent.TimeUnit#SECONDS, can be specified with io.helidon.scheduling.Scheduling.FixedRateBuilder#timeUnit(java.util.concurrent.TimeUnit) timeUnit().">時間単位は、デフォルトではjava.util.concurrent.TimeUnit#SECONDSで、io.helidon.scheduling.Scheduling.FixedRateBuilder#timeUnit(java.util.concurrent.TimeUnit) timeUnit()で指定できます。</span> </p>

<markup>@return initial delay value</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1qqzP6.1"  title="原文: time-unit"><code>time-unit</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3W667G.2" title="原文 : TimeUnit (NANOSECONDS, MICROSECONDS, MILLISECONDS, SECONDS, MINUTES, HOURS, DAYS)">TimeUnit (NANOSECONDS, MICROSECONDS, MILLISECONDS, SECONDS, MINUTES, HOURS, DAYS)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.28SLKm.2"  title="原文: TimeUnit.SECONDS"><code>TimeUnit.SECONDS</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2t6SVm.1" title="原文 : java.util.concurrent.TimeUnit TimeUnit used for interpretation of values provided with io.helidon.scheduling.Scheduling.FixedRateBuilder#delay(long) and io.helidon.scheduling.Scheduling.FixedRateBuilder#initialDelay(long).">java.util.concurrent.TimeUnit TimeUnitは、io.helidon.scheduling.Scheduling.FixedRateBuilder#delay(long)およびio.helidon.scheduling.Scheduling.FixedRateBuilder#initialDelay(long)で提供される値の解釈に使用されます。</span></p>

<markup>@return time unit for interpreting values
        in io.helidon.scheduling.Scheduling.FixedRateBuilder#delay(long)
        and io.helidon.scheduling.Scheduling.FixedRateBuilder#initialDelay(long)</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h3 id="_cron"><span class="merged" id="all.3MugOE"  title="原文:: Cron">cron</span></h3>
<div class="section">
<p><span class="merged" id="all.1Yg0X1" title="原文 : For more complicated interval definition, Cron expression can be leveraged with Scheduling.cron() builder.">より複雑な間隔定義では、<code>Scheduling.cron()</code>ビルダーでCron式を利用できます。</span></p>

<markup
lang="java"
title="Scheduling with Cron expression"
>Scheduling.cron()
    .expression("0 15 8 ? * *")
    .task(inv -&gt; System.out.println("Executer every day at 8:15"))
    .build();</markup>

<p><span class="merged" id="all.4GQohA.1" title="原文 : Type: io.helidon.scheduling.Cron">タイプ: <a href="/apidocs/io.helidon.scheduling/io/helidon/scheduling/Cron.html" target="_blank">io.helidon.scheduling.Cron</a></span></p>


<h4 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.137"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.8" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.150"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.145"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.150"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.156"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2zTAfI.1"  title="原文: expression"><code>expression</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.312"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2mXp3n.1" title="原文 : Cron expression for specifying period of execution.">実行期間を指定するCron式。</span></p>

<markup>&lt;b&gt;Examples:&lt;/b&gt;</markup>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1RIqT5.1" title="原文 : 0/2 * * * * ? * - Every 2 seconds"><code>0/2 * * * * ? *</code> - 2秒間隔</span></p>

</li>
<li>
<p><span class="merged" id="all.1uzG2d.1" title="原文 : 0 45 9 ? * * - Every day at 9:45"><code>0 45 9 ? * *</code> - 毎日、9:45</span></p>

</li>
<li>
<p><span class="merged" id="all.4YtTOV.1" title="原文 : 0 15 8 ? * MON-FRI - Every workday at 8:15"><code>0 15 8 ? * MON-FRI</code> - 全稼働日の8:15</span></p>

</li>
</ul>

<p><span class="merged" id="all.2L1fCz.1" title="原文 : @return cron expression">@return cron式</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.130" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.151"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.146"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.151"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.157"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1E8ebo.1"  title="原文: concurrent"><code>concurrent</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.229"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.116"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1lqxHv.1.spl1" title="原文 : Allow concurrent execution if previous task didn’t finish before next execution.">前のタスクが次回の実行前に終了しなかった場合、同時実行を許可します。</span> <span class="merged" id="all.1lqxHv.1.spl2"  title="原文: Default value is true.">デフォルト値は<code>true</code>です。</span> </p>

<markup>@return true for allow concurrent execution.</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h3 id="_cron_expression_syntax"><span class="merged" id="all.ILNTp" title="原文 : Cron expression syntax">Cron式の構文</span></h3>
<div class="section">
<p><span class="merged" id="all.1e4je1" title="原文 : Cron expressions should be configured as follows.">Cron式は、次のように構成する必要があります。</span></p>

</div>


<h3 id="_cron_expression"><span class="merged" id="all.1VkgWE.4"  title="原文:: Cron expression">Cron式</span></h3>
<div class="section">
<markup

title="Cron expression format"
>&lt;seconds&gt; &lt;minutes&gt; &lt;hours&gt; &lt;day-of-month&gt; &lt;month&gt; &lt;day-of-week&gt; &lt;year&gt;</markup>

<div class="block-title"><span class="merged" id="all.1md3u9.1" title="原文 : Cron expression fields"><span>Cron式フィールド</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 2.542%;">
<col style="width: 16.949%;">
<col style="width: 1.695%;">
<col style="width: 76.271%;">
<col style="width: 2.543%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.y4Yxg.1"  title="原文:: Order">順序</span></th>
<th><span class="merged" id="all.4eTLuy.3"  title="原文:: Name">名前</span></th>
<th><span class="merged" id="all.20fVrr.1"  title="原文:: Supported values">サポートされている値</span></th>
<th><span class="merged" id="all.2VORZl.1" title="原文 : Supported field format">サポートされているフィールド書式</span></th>
<th><span class="merged" id="all.1q9Cra.1"  title="原文:: Optional">オプション</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2PiYsh.1"  title="原文: 1">1</span></td>
<td class=""><span class="merged" id="all.sJRZu.1"  title="原文:: seconds">秒</span></td>
<td class=""><span class="merged" id="all.WhuwS.2"  title="原文: 0-59">0-59</span></td>
<td class=""><span class="merged" id="all.2mfmgY.5" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT">CONST、LIST、RANGE、WILDCARD、INCREMENT</span></td>
<td class=""><span class="merged" id="all.njUKu.7"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UT3bJ.2"  title="原文: 2">2</span></td>
<td class=""><span class="merged" id="all.2w8mRv.1"  title="原文:: minutes">minutes</span></td>
<td class=""><span class="merged" id="all.WhuwS.3"  title="原文: 0-59">0-59</span></td>
<td class=""><span class="merged" id="all.2mfmgY.6" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT">CONST、LIST、RANGE、WILDCARD、INCREMENT</span></td>
<td class=""><span class="merged" id="all.njUKu.8"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.20h0Tj.1"  title="原文: 3">3</span></td>
<td class=""><span class="merged" id="all.2Wnvh7.1"  title="原文:: hours">hours</span></td>
<td class=""><span class="merged" id="all.3HdkoT.1"  title="原文: 0-23">0-23</span></td>
<td class=""><span class="merged" id="all.2mfmgY.7" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT">CONST、LIST、RANGE、WILDCARD、INCREMENT</span></td>
<td class=""><span class="merged" id="all.njUKu.9"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4SiB8y.1"  title="原文: 4">4</span></td>
<td class=""><span class="merged" id="all.37F1en.1"  title="原文:: day-of-month">day-of-month</span></td>
<td class=""><span class="merged" id="all.4dCk0P.1"  title="原文: 1-31">1-31</span></td>
<td class=""><span class="merged" id="all.1jdvqq.1" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT, ANY, LAST, WEEKDAY">CONST、LIST、RANGE、WILDCARD、INCREMENT、ANY、LAST、WEEKDAY</span></td>
<td class=""><span class="merged" id="all.njUKu.10"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QevF8.1"  title="原文: 5">5</span></td>
<td class=""><span class="merged" id="all.2c2Dqg.1"  title="原文:: month">month</span></td>
<td class=""><span class="merged" id="all.4fcASm.1" title="原文 : 1-12 or JAN-DEC">1-12またはJAN-DEC</span></td>
<td class=""><span class="merged" id="all.2mfmgY.8" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT">CONST、LIST、RANGE、WILDCARD、INCREMENT</span></td>
<td class=""><span class="merged" id="all.njUKu.11"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.XkCDU.1"  title="原文: 6">6</span></td>
<td class=""><span class="merged" id="all.1yLJ3r.1"  title="原文:: day-of-week">day-of-week</span></td>
<td class=""><span class="merged" id="all.49M6xD.1" title="原文 : 1-7 or SUN-SAT">1-7またはSUN-SAT</span></td>
<td class=""><span class="merged" id="all.K8IND.1" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT, ANY, NTH, LAST">CONST、LIST、RANGE、WILDCARD、INCREMENT、ANY、NTH、LAST</span></td>
<td class=""><span class="merged" id="all.njUKu.12"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1xCWSA.1"  title="原文: 7">7</span></td>
<td class=""><span class="merged" id="all.3QtpKB.1"  title="原文:: year">year</span></td>
<td class=""><span class="merged" id="all.14sEb7.1"  title="原文: 1970-2099">1970-2099</span></td>
<td class=""><span class="merged" id="all.2mfmgY.9" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT">CONST、LIST、RANGE、WILDCARD、INCREMENT</span></td>
<td class=""><span class="merged" id="all.4eNR3V.2"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.mMmBI.1" title="原文 : Field formats"><span>フィールド書式</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 2.5%;">
<col style="width: 20.833%;">
<col style="width: 1.667%;">
<col style="width: 75%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4eTLuy.4"  title="原文:: Name">名前</span></th>
<th><span class="merged" id="all.23uuIr.1" title="原文 : Regex format">正規表現書式</span></th>
<th><span class="merged" id="all.2xA7W7.3"  title="原文:: Example">例</span></th>
<th><span class="merged" id="all.4JM9z7.35"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2suPuB.1"  title="原文:: CONST">CONST</span></td>
<td class=""><span class="merged" id="all.11LOQn.1" title="原文 : \d+">\d+</span></td>
<td class=""><span class="merged" id="all.1S48k9.1"  title="原文: 12">12</span></td>
<td class=""><span class="merged" id="all.2JJGaI.1" title="原文 : exact value">正確な値</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.25qgIu.1"  title="原文:: LIST">LIST</span></td>
<td class=""><span class="merged" id="all.2vaf1H.1" title="原文 : \d+,\d+(,\d+)*">\d+,\d+(,\d+)*</span></td>
<td class=""><span class="merged" id="all.4KmuDX.1"  title="原文: 1,2,3,4">1,2,3,4</span></td>
<td class=""><span class="merged" id="all.1Fp3oX.1" title="原文 : list of constants">定数のリスト</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1qTjXF.1"  title="原文:: RANGE">RANGE</span></td>
<td class=""><span class="merged" id="all.3deoq0.1" title="原文 : \d+-\d+">\d+-\d+</span></td>
<td class=""><span class="merged" id="all.2Kz9cd.1"  title="原文: 15-30">15-30</span></td>
<td class=""><span class="merged" id="all.1WMmFb.1" title="原文 : range of values from-to">値の範囲from-to</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1A5iGH.1"  title="原文:: WILDCARD">WILDCARD</span></td>
<td class=""><span class="merged" id="all.2ZRHXN.1" title="原文 : \*">\*</span></td>
<td class=""><span class="merged" id="all.B2THf.1"  title="原文:: *">*</span></td>
<td class=""><span class="merged" id="all.4FaMEt.1" title="原文 : all values withing the field">フィールド内のすべての値</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.JdAMj.1"  title="原文:: INCREMENT">INCREMENT</span></td>
<td class=""><span class="merged" id="all.3Muy5G.1" title="原文 : \d+\/\d+">\d+\/\d+</span></td>
<td class=""><span class="merged" id="all.2v7f4O.1"  title="原文: 0/5">0/5</span></td>
<td class=""><span class="merged" id="all.FzQuZ.1" title="原文 : inital number / increments, 2/5 means 2,7,9,11,16,…​">イニシャル/増分値、2/5は2,7,9,11,16…を意味します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4R905W.1"  title="原文:: ANY">ANY</span></td>
<td class=""><span class="merged" id="all.48Fhl4.1" title="原文 : \?">\?</span></td>
<td class=""><span class="merged" id="all.1pzFsu.1"  title="原文:: ?">?</span></td>
<td class=""><span class="merged" id="all.dcqmD.1" title="原文 : any day(apply only to day-of-week and day-of-month)">任意の日 (day-of-weekおよびday-of-monthにのみ適用)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.eOrAg.1" title="原文 : NTH">NTH</span></td>
<td class=""><span class="merged" id="all.4UxPev.2" title="原文 : \#">\#</span></td>
<td class=""><span class="merged" id="all.41IYLa.2"  title="原文: 1#3">1#3</span></td>
<td class=""><span class="merged" id="all.41bvPv.1" title="原文 : nth day of the month, 2#3 means third monday of the month">月のn番目の日、2#3は月の3番目の月曜日を意味します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2H8Yrc.1"  title="原文:: LAST">LAST</span></td>
<td class=""><span class="merged" id="all.2K4U8j.1" title="原文 : \d*L(+\d+|\-\d+)?">\d*L(+\d+|\-\d+)?</span></td>
<td class=""><span class="merged" id="all.giqKc.1" title="原文 : 3L-3">3L-3</span></td>
<td class=""><span class="merged" id="all.35OHrt.1" title="原文 : last day of the month in day-of-month or last nth day in the day-of-week">day-of-monthの最終日またはday-of-weekの最終n番目の曜日</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28bk3B.1"  title="原文:: WEEKDAY">WEEKDAY</span></td>
<td class=""><span class="merged" id="all.4UxPev.3" title="原文 : \#">\#</span></td>
<td class=""><span class="merged" id="all.41IYLa.3"  title="原文: 1#3">1#3</span></td>
<td class=""><span class="merged" id="all.18vHKy.1" title="原文 : nearest weekday of the nth day of month, 1W is the first monday of the week">月のn番目の曜日の最も近い平日。1Wは週の最初の月曜日です</span></td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.crVzl.1" title="原文 : Examples"><span>例</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 76.923%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1VkgWE.5"  title="原文:: Cron expression">Cron式</span></th>
<th><span class="merged" id="all.4JM9z7.36"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4fvfG6.1" title="原文 : * * * * * ?">* * * * * ?</span></td>
<td class=""><span class="merged" id="all.1bEecX.1" title="原文 : Every second">毎秒</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.WLh7K.1"  title="原文: 0/2 * * * * ? *">0/2 * * * * ? *</span></td>
<td class=""><span class="merged" id="all.1sTif2.1"  title="原文:: Every 2 seconds">2秒ごと</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3wVlJB.1"  title="原文: 0 45 9 ? * *">0 45 9 ? * *</span></td>
<td class=""><span class="merged" id="all.4e3Vr1.1"  title="原文:: Every day at 9:45">毎日 9:45</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2jqbl9.1" title="原文 : 0 15 8 ? * MON-FRI">0 15 8 ? * MON-FRI</span></td>
<td class=""><span class="merged" id="all.3Mc83H.1" title="原文 : Every workday at 8:15">全稼働日の8:15</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.3Oc42o" title="原文 : Metadata like human-readable interval description or configured values are available through CronInvocation provided as task parameter.">判読可能な間隔の説明や構成された値などのメタデータは、タスク・パラメータとして提供されるCronInvocationを介して使用できます。</span></p>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.46"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.6J1nQ" title="原文 : Scheduling is configurable with Helidon Config.">スケジューリングは、<router-link to="/se/config/introduction">「Helidon構成」</router-link>で構成できます。</span></p>

<markup
lang="java"
title="Example of configuring"
>Scheduling.fixedRate()
    .config(Config.create(() -&gt; ConfigSources.create(
    """
    delay: 4
    delay-type: SINCE_PREVIOUS_END
    initial-delay: 1
    time-unit: SECONDS
    """, MediaTypes.APPLICATION_X_YAML)))
    .task(inv -&gt; System.out.println("Every 4 minutes, first invocation 1 minutes after start"))
    .build();</markup>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.42"  title="原文:: Examples">例</span></h2>
<div class="section">

<h3 id="_fixed_rate_2"><span class="merged" id="all.2XeJts.3"  title="原文:: Fixed rate">固定レート</span></h3>
<div class="section">
<p><span class="merged" id="all.3dVkC4" title="原文 : For simple fixed rate invocation use .">単純な固定レート呼出しに使用します。</span></p>

<markup
lang="java"
title="Example of scheduling with fixed rate use <code>Scheduling.fixedRate()</code> builder."
>Scheduling.fixedRate()
        .delay(10)
        .initialDelay(5)
        .timeUnit(TimeUnit.MINUTES)
        .task(inv -&gt; System.out.println("Every 10 minutes, first invocation 5 minutes after start"))
        .build();</markup>

<p><span class="merged" id="all.3z3MUb" title="原文 : Metadata like human-readable interval description or configured values are available through FixedRateInvocation provided as task parameter.">人間が読める間隔の説明や構成済の値などのMetadataは、タスク・パラメータとして指定された<code>FixedRateInvocation</code>を介して使用できます。</span></p>

<markup
lang="java"
title="Example with invocation metadata"
>Scheduling.fixedRate()
        .delay(10)
        .task(inv -&gt; System.out.println("Method invoked " + inv.description()))
        .build();</markup>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.24"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1HvyIh.1" title="原文 : Cron-utils GitHub page"><a href="https://github.com/jmrozanec/cron-utils" target="_blank">Cron-utils GitHubページ</a></span></p>

</li>
<li>
<p><span class="merged" id="all.21rQgC.1" title="原文 : Helidon Scheduling JavaDoc"><a href="/apidocs/io.helidon.microprofile.scheduling/io/helidon/microprofile/scheduling/package-summary.html" target="_blank">HelidonスケジュールJavaDoc</a></span></p>

</li>
</ul>

</div>

</doc-view>
