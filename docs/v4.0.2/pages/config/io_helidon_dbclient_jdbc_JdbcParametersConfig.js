<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4CZvo0" title="原文 : JdbcParametersConfig (dbclient.jdbc) Configuration">JdbcParametersConfig (dbclient.jdbc)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.tmvRt" title="原文 : Type: io.helidon.dbclient.jdbc.JdbcParametersConfig">タイプ: <a href="/apidocs/io.helidon.dbclient.jdbc/io/helidon/dbclient/jdbc/JdbcParametersConfig.html" target="_blank">io.helidon.dbclient.jdbc.JdbcParametersConfig</a></span></p>

<markup
lang="text"
title="Config key"
>parameters</markup>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.14"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.14" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.15"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.15"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.15"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.15"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.YCPN3"  title="原文: set-object-for-java-time"><code>set-object-for-java-time</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.22"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.11"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.h7SBv.spl1" title="原文 : Set all java.time Date/Time values directly using java.sql.PreparedStatement#setObject(int, Object).">java.sql.PreparedStatement#setObject(int, Object)を使用して、すべての<code>java.time</code>日時値を直接設定します。</span> <span class="merged" id="all.h7SBv.spl2" title="原文 : This option shall work fine for recent JDBC drivers.">このオプションは、最近のJDBCドライバでは正常に動作します。</span> <span class="merged" id="all.h7SBv.spl3"  title="原文: Default value is true.">デフォルト値は<code>true</code>です。</span> </p>

<markup>@return whether to use java.sql.PreparedStatement#setObject(int, Object) for `java.time` Date/Time values</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.44Zc6X"  title="原文: string-binding-size"><code>string-binding-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.17"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lhex8.1"  title="原文: 1024"><code>1024</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4cIUx3.spl1" title="原文 : String values with length above this limit will be bound using java.sql.PreparedStatement#setCharacterStream(int, java.io.Reader, int) if #useStringBinding() is set to true.">この制限を超える長さの文字列値は、#useStringBinding()が<code>true</code>に設定されている場合、java.sql.PreparedStatement#setCharacterStream(int, java.io.Reader, int)を使用してバインドされます。</span> <span class="merged" id="all.4cIUx3.spl2"  title="原文:: Default value is 1024.">デフォルト値は<code>1024</code>です。</span> </p>

<markup>@return String values length limit for java.io.CharArrayReader binding</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kENYb"  title="原文: timestamp-for-local-time"><code>timestamp-for-local-time</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.23"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.12"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.UCaHn.spl1" title="原文 : Use java.sql.PreparedStatement#setTimestamp(int, java.sql.Timestamp) to set java.time.LocalTime values when true or use java.sql.PreparedStatement#setTime(int, java.sql.Time) when false.">java.sql.PreparedStatement#setTimestamp(int, java.sql.Timestamp)を使用して、<code>true</code>のときにjava.time.LocalTime値を設定するか、<code>false</code>のときにjava.sql.PreparedStatement#setTime(int, java.sql.Time)を使用します。</span> <span class="merged" id="all.UCaHn.spl2"  title="原文: Default value is true.">デフォルト値は<code>true</code>です。</span> <span class="merged" id="all.UCaHn.spl3" title="原文 : This option is vendor specific.">このオプションはベンダー固有です。</span> <span class="merged" id="all.UCaHn.spl4" title="原文 : Most of the databases are fine with java.sql.Timestamp, but for example SQL Server requires java.sql.Time.">ほとんどのデータベースはjava.sql.Timestampでは問題ありませんが、たとえばSQL Serverではjava.sql.Timeが必要です。</span> <span class="merged" id="all.UCaHn.spl5" title="原文 : This option does not apply when #setObjectForJavaTime() is set to true.">このオプションは、#setObjectForJavaTime()が<code>true</code>に設定されている場合には適用されません。</span> </p>

<markup>@return whether to use java.sql.Timestamp instead of java.sql.Time
        for java.time.LocalTime values</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1KZNuJ"  title="原文: use-byte-array-binding"><code>use-byte-array-binding</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.24"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.13"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3XwnWU.spl1" title="原文 : Use java.sql.PreparedStatement#setBinaryStream(int, java.io.InputStream, int) binding for byte[] values."><code>byte[]</code>値には、java.sql.PreparedStatement#setBinaryStream(int, java.io.InputStream, int)バインディングを使用します。</span> <span class="merged" id="all.3XwnWU.spl2"  title="原文: Default value is true.">デフォルト値は<code>true</code>です。</span> </p>

<markup>@return whether to use java.io.ByteArrayInputStream binding</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1M9mml"  title="原文: use-n-string"><code>use-n-string</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.25"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.7"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2d0OCH.spl1" title="原文 : Use SQL NCHAR, NVARCHAR or LONGNVARCHAR value conversion for String values.">文字列値には、SQL <code>NCHAR</code>、<code>NVARCHAR</code>または<code>LONGNVARCHAR</code>の値変換を使用します。</span> <span class="merged" id="all.2d0OCH.spl2"  title="原文: Default value is false.">デフォルト値は<code>false</code>です。</span> </p>

<markup>@return whether NString conversion is used</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3klPfR"  title="原文: use-string-binding"><code>use-string-binding</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.26"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.14"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3KhScQ.spl1" title="原文 : Use java.sql.PreparedStatement#setCharacterStream(int, java.io.Reader, int) binding for String values with length above #stringBindingSize() limit.">長さが#stringBindingSize()制限を超える文字列値には、java.sql.PreparedStatement#setCharacterStream(int, java.io.Reader, int)バインディングを使用します。</span> <span class="merged" id="all.3KhScQ.spl2"  title="原文: Default value is true.">デフォルト値は<code>true</code>です。</span> </p>

<markup>@return whether to use java.io.CharArrayReader binding</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
