<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.29"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.26" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.23" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.20" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.19" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.20" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.12" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.35"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2isXYf.spl1" title="原文 : Scheduling is an essential feature for the Enterprise.">スケジューリングは、企業にとって不可欠な機能です。</span> <span class="merged" id="all.2isXYf.spl2" title="原文 : Helidon has its own implementation of Scheduling functionality based on Cron-utils.">Helidonには、<a href="https://github.com/jmrozanec/cron-utils" target="_blank">Cron-utils</a>に基づいたスケジューリング機能の独自の実装があります。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.28"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1OtigJ" title="原文 : To enable Scheduling add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">スケジューリングを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.scheduling&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-scheduling&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.24"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.1HOWkn.spl1" title="原文 : For scheduling tasks in Helidon you can choose from @Scheduled or @FixedRate annotations by required complexity of invocation interval.">Helidonでタスクをスケジュールする場合、起動間隔の複雑さに応じて、<code>@Scheduled</code>または<code>@FixedRate</code>注釈から選択できます。</span> <span class="merged" id="all.1HOWkn.spl2" title="原文 : All you need is define method with one of the annotations in application scoped bean.">必要なのは、アプリケーション・スコープBean内でいずれかの注釈を持つメソッドを定義することだけです。</span> </p>


<h3 id="_fixed_rate"><span class="merged" id="all.2XeJts"  title="原文:: Fixed rate">固定レート</span></h3>
<div class="section">
<p><span class="merged" id="all.3yJ0EA" title="原文 : For simple fixed rate invocation interval is @FixedRate the easiest way for scheduling task invocation.">単純な固定レート起動間隔の場合は、タスク起動をスケジュールするための最も簡単な方法は<code>@FixedRate</code>です。</span></p>

<markup
lang="java"

>@FixedRate(initialDelay = 5, value = 10, timeUnit = TimeUnit.MINUTES)</markup>

<p><span class="merged" id="all.21yRPI" title="原文 : All values defined with the annotation can be overridden from the config.">注釈で定義されたすべての値は、構成からオーバーライドできます。</span></p>

<markup
lang="yaml"
title="Overriding annotated values from config"
>fully.qualified.ClassName.methodName:
  schedule:
    initial-delay: 5
    delay: 15
    time-unit: HOURS</markup>

<p><span class="merged" id="all.4ZNznc" title="原文 : Metadata like human-readable interval description or configured values are available through FixedRateInvocation injected as method parameter.">人間が読める間隔の説明や構成済の値などのMetadataは、<em>FixedRateInvocation</em>でメソッド・パラメータとしてインジェクトできます。</span></p>

<markup
lang="java"

>@FixedRate(initialDelay = 5, value = 10, timeUnit = TimeUnit.MINUTES)</markup>

</div>


<h3 id="_cron_expression"><span class="merged" id="all.1VkgWE"  title="原文:: Cron expression">Cron式</span></h3>
<div class="section">
<p><span class="merged" id="all.3RV0EW" title="原文 : For more complicated interval definition, cron expression can be leveraged with @Schedule annotation.">より複雑な間隔定義の場合、<code>@Schedule</code>注釈でcron式を利用できます。</span></p>

<markup
lang="java"

>@Scheduled("0 15 8 ? * *", concurrentExecution = false)
public void methodName() { ... }</markup>

</div>


<h3 id="_cron_expression_2"><span class="merged" id="all.1VkgWE.1"  title="原文:: Cron expression">Cron式</span></h3>
<div class="section">
<markup

title="Cron expression format"
>&lt;seconds&gt; &lt;minutes&gt; &lt;hours&gt; &lt;day-of-month&gt; &lt;month&gt; &lt;day-of-week&gt; &lt;year&gt;</markup>

<div class="block-title"><span class="merged" id="all.1md3u9" title="原文 : Cron expression fields"><span>Cron式フィールド</span></span></div>
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
<th><span class="merged" id="all.y4Yxg"  title="原文:: Order">順序</span></th>
<th><span class="merged" id="all.4eTLuy"  title="原文:: Name">名前</span></th>
<th><span class="merged" id="all.20fVrr"  title="原文:: Supported values">サポートされている値</span></th>
<th><span class="merged" id="all.2VORZl" title="原文 : Supported field format">サポートされているフィールド書式</span></th>
<th><span class="merged" id="all.1q9Cra"  title="原文:: Optional">オプション</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2PiYsh"  title="原文: 1">1</span></td>
<td class=""><span class="merged" id="all.sJRZu"  title="原文:: seconds">seconds</span></td>
<td class=""><span class="merged" id="all.WhuwS"  title="原文: 0-59">0-59</span></td>
<td class=""><span class="merged" id="all.2mfmgY" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT">CONST、LIST、RANGE、WILDCARD、INCREMENT</span></td>
<td class=""><span class="merged" id="all.njUKu"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UT3bJ"  title="原文: 2">2</span></td>
<td class=""><span class="merged" id="all.2w8mRv"  title="原文:: minutes">minutes</span></td>
<td class=""><span class="merged" id="all.WhuwS.1"  title="原文: 0-59">0-59</span></td>
<td class=""><span class="merged" id="all.2mfmgY.1" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT">CONST、LIST、RANGE、WILDCARD、INCREMENT</span></td>
<td class=""><span class="merged" id="all.njUKu.1"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.20h0Tj"  title="原文: 3">3</span></td>
<td class=""><span class="merged" id="all.2Wnvh7"  title="原文:: hours">hours</span></td>
<td class=""><span class="merged" id="all.3HdkoT"  title="原文: 0-23">0-23</span></td>
<td class=""><span class="merged" id="all.2mfmgY.2" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT">CONST、LIST、RANGE、WILDCARD、INCREMENT</span></td>
<td class=""><span class="merged" id="all.njUKu.2"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4SiB8y"  title="原文: 4">4</span></td>
<td class=""><span class="merged" id="all.37F1en"  title="原文:: day-of-month">day-of-month</span></td>
<td class=""><span class="merged" id="all.4dCk0P"  title="原文: 1-31">1-31</span></td>
<td class=""><span class="merged" id="all.1jdvqq" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT, ANY, LAST, WEEKDAY">CONST、LIST、RANGE、WILDCARD、INCREMENT、ANY、LAST、WEEKDAY</span></td>
<td class=""><span class="merged" id="all.njUKu.3"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QevF8"  title="原文: 5">5</span></td>
<td class=""><span class="merged" id="all.2c2Dqg"  title="原文:: month">month</span></td>
<td class=""><span class="merged" id="all.4fcASm" title="原文 : 1-12 or JAN-DEC">1-12またはJAN-DEC</span></td>
<td class=""><span class="merged" id="all.2mfmgY.3" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT">CONST、LIST、RANGE、WILDCARD、INCREMENT</span></td>
<td class=""><span class="merged" id="all.njUKu.4"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.XkCDU"  title="原文: 6">6</span></td>
<td class=""><span class="merged" id="all.1yLJ3r"  title="原文:: day-of-week">day-of-week</span></td>
<td class=""><span class="merged" id="all.49M6xD" title="原文 : 1-7 or SUN-SAT">1-7またはSUN-SAT</span></td>
<td class=""><span class="merged" id="all.K8IND" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT, ANY, NTH, LAST">CONST、LIST、RANGE、WILDCARD、INCREMENT、ANY、NTH、LAST</span></td>
<td class=""><span class="merged" id="all.njUKu.5"  title="原文:: false">false</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1xCWSA"  title="原文: 7">7</span></td>
<td class=""><span class="merged" id="all.3QtpKB"  title="原文:: year">year</span></td>
<td class=""><span class="merged" id="all.14sEb7"  title="原文: 1970-2099">1970-2099</span></td>
<td class=""><span class="merged" id="all.2mfmgY.4" title="原文 : CONST, LIST, RANGE, WILDCARD, INCREMENT">CONST、LIST、RANGE、WILDCARD、INCREMENT</span></td>
<td class=""><span class="merged" id="all.4eNR3V"  title="原文:: true">true</span></td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.mMmBI" title="原文 : Field formats"><span>フィールド書式</span></span></div>
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
<th><span class="merged" id="all.4eTLuy.1"  title="原文:: Name">名前</span></th>
<th><span class="merged" id="all.23uuIr" title="原文 : Regex format">正規表現書式</span></th>
<th><span class="merged" id="all.2xA7W7.1"  title="原文:: Example">例</span></th>
<th><span class="merged" id="all.4JM9z7.17"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2suPuB"  title="原文:: CONST">CONST</span></td>
<td class=""><span class="merged" id="all.11LOQn" title="原文 : \d+">\d+</span></td>
<td class=""><span class="merged" id="all.1S48k9"  title="原文: 12">12</span></td>
<td class=""><span class="merged" id="all.2JJGaI" title="原文 : exact value">正確な値</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.25qgIu"  title="原文:: LIST">LIST</span></td>
<td class=""><span class="merged" id="all.2vaf1H" title="原文 : \d+,\d+(,\d+)*">\d+,\d+(,\d+)*</span></td>
<td class=""><span class="merged" id="all.4KmuDX"  title="原文: 1,2,3,4">1,2,3,4</span></td>
<td class=""><span class="merged" id="all.1Fp3oX" title="原文 : list of constants">定数のリスト</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1qTjXF"  title="原文:: RANGE">RANGE</span></td>
<td class=""><span class="merged" id="all.3deoq0" title="原文 : \d+-\d+">\d+-\d+</span></td>
<td class=""><span class="merged" id="all.2Kz9cd"  title="原文: 15-30">15-30</span></td>
<td class=""><span class="merged" id="all.1WMmFb" title="原文 : range of values from-to">値の範囲from-to</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1A5iGH"  title="原文:: WILDCARD">WILDCARD</span></td>
<td class=""><span class="merged" id="all.2ZRHXN" title="原文 : \*">\*</span></td>
<td class=""><span class="merged" id="all.B2THf"  title="原文:: *">*</span></td>
<td class=""><span class="merged" id="all.4FaMEt" title="原文 : all values withing the field">フィールド内のすべての値</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.JdAMj"  title="原文:: INCREMENT">INCREMENT</span></td>
<td class=""><span class="merged" id="all.3Muy5G" title="原文 : \d+\/\d+">\d+\/\d+</span></td>
<td class=""><span class="merged" id="all.2v7f4O"  title="原文: 0/5">0/5</span></td>
<td class=""><span class="merged" id="all.FzQuZ" title="原文 : inital number / increments, 2/5 means 2,7,9,11,16,…​">イニシャル/増分値、2/5は2,7,9,11,16…を意味します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4R905W"  title="原文:: ANY">ANY</span></td>
<td class=""><span class="merged" id="all.48Fhl4" title="原文 : \?">\?</span></td>
<td class=""><span class="merged" id="all.1pzFsu"  title="原文:: ?">?</span></td>
<td class=""><span class="merged" id="all.dcqmD" title="原文 : any day(apply only to day-of-week and day-of-month)">任意の日 (day-of-weekおよびday-of-monthにのみ適用)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.eOrAg" title="原文 : NTH">NTH</span></td>
<td class=""><span class="merged" id="all.4UxPev" title="原文 : \#">\#</span></td>
<td class=""><span class="merged" id="all.41IYLa"  title="原文: 1#3">1#3</span></td>
<td class=""><span class="merged" id="all.41bvPv" title="原文 : nth day of the month, 2#3 means third monday of the month">月のn番目の日、2#3は月の3番目の月曜日を意味します</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2H8Yrc"  title="原文:: LAST">LAST</span></td>
<td class=""><span class="merged" id="all.2K4U8j" title="原文 : \d*L(+\d+|\-\d+)?">\d*L(+\d+|\-\d+)?</span></td>
<td class=""><span class="merged" id="all.giqKc" title="原文 : 3L-3">3L-3</span></td>
<td class=""><span class="merged" id="all.35OHrt" title="原文 : last day of the month in day-of-month or last nth day in the day-of-week">day-of-monthの最終日またはday-of-weekの最終n番目の曜日</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28bk3B"  title="原文:: WEEKDAY">WEEKDAY</span></td>
<td class=""><span class="merged" id="all.4UxPev.1" title="原文 : \#">\#</span></td>
<td class=""><span class="merged" id="all.41IYLa.1"  title="原文: 1#3">1#3</span></td>
<td class=""><span class="merged" id="all.18vHKy" title="原文 : nearest weekday of the nth day of month, 1W is the first monday of the week">月のn番目の曜日の最も近い平日。1Wは週の最初の月曜日です</span></td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.crVzl" title="原文 : Examples"><span>例</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 76.923%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1VkgWE.2"  title="原文:: Cron expression">Cron式</span></th>
<th><span class="merged" id="all.4JM9z7.18"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4fvfG6" title="原文 : * * * * * ?">* * * * * ?</span></td>
<td class=""><span class="merged" id="all.1bEecX" title="原文 : Every second">毎秒</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.WLh7K"  title="原文: 0/2 * * * * ? *">0/2 * * * * ? *</span></td>
<td class=""><span class="merged" id="all.1sTif2"  title="原文:: Every 2 seconds">2秒ごと</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3wVlJB"  title="原文: 0 45 9 ? * *">0 45 9 ? * *</span></td>
<td class=""><span class="merged" id="all.4e3Vr1"  title="原文:: Every day at 9:45">毎日 9:45</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2jqbl9" title="原文 : 0 15 8 ? * MON-FRI">0 15 8 ? * MON-FRI</span></td>
<td class=""><span class="merged" id="all.3Mc83H" title="原文 : Every workday at 8:15">全稼働日の8:15</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.2JQqhs" title="原文 : Metadata like human-readable interval description or configured values are available through CronInvocation injected as method parameter.">人間が読める間隔の説明や構成済の値などのMetadataは、<em>CronInvocation</em>でメソッド・パラメータとしてインジェクトできます。</span></p>

<markup
lang="java"

>@Scheduled("0 15 8 ? * *")
public void methodName(CronInvocation inv) { ... }</markup>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.24"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2PLDdf" title="原文 : Scheduled annotation properties can be overridden using application.yaml properties"><code>Scheduled</code>注釈プロパティは、<code>application.yaml</code>プロパティを使用してオーバーライドできます</span></p>

<markup
lang="yaml"
title="Overriding annotated values from config"
>fully.qualified.ClassName.methodName:
  schedule:
    cron: "* * * * * ?"
    concurrent: false</markup>

<div class="block-title"><span class="merged" id="all.117Lqg"  title="原文:: Configuration properties"><span>構成プロパティ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 76.923%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.261WC8.1"  title="原文:: Property">プロパティ</span></th>
<th><span class="merged" id="all.4JM9z7.19"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.R1T3Y"  title="原文:: cron">cron</span></td>
<td class=""><span class="merged" id="all.4Wt30B" title="原文 : String containing cron setup">cron設定を含む文字列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.44ceUO"  title="原文:: concurrent">同時 </span></td>
<td class=""><span class="merged" id="all.9VJRj.spl1" title="原文 : Boolean, equivalent concurrentExecution property of @Scheduled."><code>@Scheduled</code>のブール、同等の<code>concurrentExecution</code>プロパティ。</span> <span class="merged" id="all.9VJRj.spl2"  title="原文:: Default true.">デフォルト <code>true</code></span> </td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.22"  title="原文:: Examples">例</span></h2>
<div class="section">

<h3 id="_fixed_rate_2"><span class="merged" id="all.2XeJts.1"  title="原文:: Fixed rate">固定レート</span></h3>
<div class="section">
<markup
lang="java"
title="Example of scheduling with fixed rate"
>@FixedRate(initialDelay = 5, value = 10, timeUnit = TimeUnit.MINUTES)
public void methodName() {
    System.out.println("Every 10 minutes, first invocation 5 minutes after start");
}</markup>

</div>


<h3 id="_fixedrate_metadata_injection"><span class="merged" id="all.40d4SJ" title="原文 : FixedRate Metadata Injection">FixedRate Metadataインジェクション</span></h3>
<div class="section">
<markup
lang="java"
title="Example with invocation metadata"
>@FixedRate(initialDelay = 5, value = 10, timeUnit = TimeUnit.MINUTES)
public void methodName(FixedRateInvocation inv) {
    System.out.println("Method invoked " + inv.description());
}</markup>

</div>


<h3 id="_cron_expression_3"><span class="merged" id="all.1VkgWE.3"  title="原文:: Cron expression">Cron式</span></h3>
<div class="section">
<markup
lang="java"
title="Example of scheduling with cron expression"
>@Scheduled("0 15 8 ? * *", concurrentExecution = false)
public void methodName() {
    System.out.println("Executer every day at 8:15");
}</markup>

</div>


<h3 id="_scheduled_metadata_injection"><span class="merged" id="all.hnLBG" title="原文 : Scheduled Metadata Injection.">スケジュールされたMetadataインジェクション。</span></h3>
<div class="section">
<markup
lang="java"
title="Example with invocation metadata"
>@Scheduled("0 15 8 ? * *")
public void methodName(CronInvocation inv) {
    System.out.println("Method invoked " + inv.description());
}</markup>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.12"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1HvyIh" title="原文 : Cron-utils GitHub page"><a href="https://github.com/jmrozanec/cron-utils" target="_blank">Cron-utils GitHubページ</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1C3Bzb" title="原文 : Helidon Scheduling JavaDoc"><a href="./apidocs/io.helidon.microprofile.scheduling/io/helidon/microprofile/scheduling/package-summary.html" target="_blank">HelidonスケジュールJavaDoc</a></span></p>

</li>
</ul>

</div>

</doc-view>
