<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>

<markup
lang="text"
title="Type"
>io.helidon.microprofile.lra</markup>

<p><span class="merged" id="all.4WZWC7.1" title="原文 : Optional configuration options:">オプションの構成オプション:</span></p>


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
<th><span class="merged" id="all.3H5QDp"  title="原文:: Key">キー</span></th>
<th><span class="merged" id="all.p0YxL"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.3T02MF"  title="原文:: Default value">デフォルト値</span></th>
<th><span class="merged" id="all.4JM9z7"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2c311b"  title="原文: mp.lra.coordinator.url"><code>mp.lra.coordinator.url</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.66"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.Jt8u2"  title="原文: http://localhost:8070/lra-coordinator"><code><a class="bare" href="http://localhost:8070/lra-coordinator" target="_blank">http://localhost:8070/lra-coordinator</a></code></span></td>
<td class=""><span class="merged" id="all.2bJERr" title="原文 : Url of coordinator.">コーディネータのURL。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V2AIt"  title="原文: mp.lra.coordinator.propagation.active"><code>mp.lra.coordinator.propagation.active</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.35"  title="原文:: boolean">boolean</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2LQ1Mf" title="原文 : Propagate LRA headers LRA_HTTP_CONTEXT_HEADER and LRA_HTTP_PARENT_CONTEXT_HEADER through non-LRA endpoints.">LRA以外のエンドポイントを介してLRAヘッダーLRA_HTTP_CONTEXT_HEADERおよびLRA_HTTP_PARENT_CONTEXT_HEADERを伝播します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.bvKPk"  title="原文: mp.lara.participant.url"><code>mp.lara.participant.url</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.67"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.DCZlm" title="原文 : Url of the LRA enabled service overrides standard base uri, so coordinator can call load-balancer instead of the service.">LRA対応サービスのURLは標準ベースURIをオーバーライドするため、コーディネータはサービスではなくロード・バランサをコールできます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.22XCBL"  title="原文: mp.lra.coordinator.timeout"><code>mp.lra.coordinator.timeout</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.68"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3IBeQU" title="原文 : Timeout for synchronous communication with coordinator.">コーディネータとの同期通信のタイムアウト。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3CQbbh"  title="原文: mp.lra.coordinator.timeout-unit"><code>mp.lra.coordinator.timeout-unit</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.69"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.U3036" title="原文 : Timeout unit for synchronous communication with coordinator.">コーディネータとの同期通信のタイムアウト単位。</span></td>
</tr>
</tbody>
</table>
</div>

</doc-view>
