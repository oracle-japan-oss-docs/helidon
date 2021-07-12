<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.27" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.8dqgi" title="原文 : To enable Scheduling add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">スケジューリングを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.scheduling&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-scheduling&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_scheduling"><span class="merged" id="all.3H14IH.1"  title="原文:: Scheduling">スケジューリング</span></h2>
<div class="section">
<p><span class="merged" id="all.12uNSU.spl1" title="原文 : For scheduling tasks in Helidon you can choose from @Scheduled or @FixedRate annotations by required complexity of invocation interval.">Helidonのスケジュール・タスクでは、要求される起動間隔の複雑さに応じて、@Scheduled注釈または@FixedRate注釈から選択できます。</span> <span class="merged" id="all.12uNSU.spl2" title="原文 : All you need is define method with one of the annotations in application scoped bean.">必要なのは、アプリケーション・スコープBean内でいずれかの注釈を持つメソッドを定義することだけです。</span> </p>


<h3 id="_fixed_rate"><span class="merged" id="all.2XeJts"  title="原文:: Fixed rate">固定レート</span></h3>
<div class="section">
<p><span class="merged" id="all.2Me7XC" title="原文 : For simple fixed rate invocation interval is @FixedRate the easiest way for scheduling task invocation.">単純な固定レート起動間隔の場合、タスク起動をスケジュールする最も簡単な方法は@FixedRateです。</span></p>

<markup
lang="java"
title="固定レートによるスケジューリングの例"
>@FixedRate(initialDelay = 5, value = 10, timeUnit = TimeUnit.MINUTES)
public void methodName() {
    System.out.println("Every 10 minutes, first invocation 5 minutes after start");
}</markup>

<p><span class="merged" id="all.21yRPI" title="原文 : All values defined with the annotation can be overridden from the config.">注釈で定義されたすべての値は、構成からオーバーライドできます。</span></p>

<markup
lang="yaml"
title="構成からの注釈付き値のオーバーライド"
>fully.quallified.ClassName.methodName:
  schedule:
    initial-delay: 5
    delay: 15
    time-unit: HOURS</markup>

<p><span class="merged" id="all.3OKT6f" title="原文 : Metadata like human-readable interval description or configured values are available through FixedRateInvocation injected as method parameter.">判読可能な間隔の説明や構成された値などのメタデータは、メソッド・パラメータとしてインジェクトされたFixedRateInvocationを介して使用できます。</span></p>

<markup
lang="java"
title="ピボット・メタデータを使用した例"
>@FixedRate(initialDelay = 5, value = 10, timeUnit = TimeUnit.MINUTES)
public void methodName(FixedRateInvocation inv) {
    System.out.println("Method invoked " + inv.description());
}</markup>

</div>

<h3 id="_cron_expression"><span class="merged" id="all.1VkgWE"  title="原文:: Cron expression">Cron式</span></h3>
<div class="section">
<p><span class="merged" id="all.4Rkh8L" title="原文 : For more complicated interval definition, cron expression can be leveraged with @Schedule annotation.">より複雑な間隔定義の場合は、cron式を@Schedule注釈で利用できます。</span></p>

<markup
lang="java"
title="cron式によるスケジューリングの例"
>@Scheduled("0 15 8 ? * *")
public void methodName() {
    System.out.println("Executer every day at 8:15");
}</markup>

<markup

title="Cron式の書式"
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
<th><span class="merged" id="all.2xA7W7.2"  title="原文:: Example">例</span></th>
<th><span class="merged" id="all.4JM9z7.2"  title="原文:: Description">説明</span></th>
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
<th><span class="merged" id="all.1VkgWE.1"  title="原文:: Cron expression">Cron式</span></th>
<th><span class="merged" id="all.4JM9z7.3"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4fvfG6" title="原文 : * * * * * ?">* * * * * ?</span></td>
<td class=""><span class="merged" id="all.1bEecX"  title="原文:: Every second">1秒 ごと</span></td>
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
<p><span class="merged" id="all.3od6Jw" title="原文 : Metadata like human-readable interval description or configured values are available through CronInvocation injected as method parameter.">判読可能な間隔の説明や構成された値などのメタデータは、メソッド・パラメータとしてインジェクトされたCronInvocationを介して使用できます。</span></p>

<markup
lang="java"
title="ピボット・メタデータを使用した例"
>@Scheduled("0 15 8 ? * *")
public void methodName(CronInvocation inv) {
    System.out.println("Method invoked " + inv.description());
}</markup>

</div>
</div>
</doc-view>
