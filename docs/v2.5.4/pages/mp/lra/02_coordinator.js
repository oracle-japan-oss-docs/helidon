<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_coordinator"><span class="merged" id="all.2hLDun.1"  title="原文:: Coordinator">コーディネータ</span></h2>
<div class="section">
<p><span class="merged" id="all.2tf3T5.spl1" title="原文 : Coordinator is a service that tracks all LRA transactions and calls the compensate REST endpoints of the participants when the LRA transaction gets cancelled or completes (in case it gets closed).">コーディネータは、すべてのLRAトランザクションをトラッキングし、LRAトランザクションが取り消されたり完了すると(クローズされると)、参加者の補正RESTエンドポイントをコールするサービスです。</span> <span class="merged" id="all.2tf3T5.spl2" title="原文 : In addition, participant also keeps track of timeouts, retries participant calls, and assigns LRA ids.">また、参加者はタイムアウトを追跡し、参加者コールを再試行して、LRA idを割り当てます。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.58sEL" title="原文 : Helidon LRA coordinator">Helidon LRAコーディネータ</span></p>

</li>
<li>
<p><span class="merged" id="all.1bSzrw" title="原文 : Narayana coordinator."><a href="https://narayana.io/lra" id="" target="_blank" >Narayanaコーディネータ</a>。</span></p>

</li>
</ul>

<h3 id="_helidon_lra_coordinator"><span class="merged" id="all.58sEL.1" title="原文 : Helidon LRA coordinator">Helidon LRAコーディネータ</span></h3>
<div class="section">
<div class="admonition caution">
<p class="admonition-inline"><span class="merged" id="all.3pKPxy" title="原文 : Experimental tool, usage in production is not advised.">実験的なツールです。本番での使用は推奨されません。</span></p>
</div>
<markup
lang="bash"
title="Build and run Helidon LRA coordinator"
>docker build -t helidon/lra-coordinator https://github.com/oracle/helidon.git#:lra/coordinator/server
docker run -dp 8070:8070 --name lra-coordinator --network="host" helidon/lra-coordinator</markup>

<p><span class="merged" id="all.1wtnHW" title="原文 : Helidon LRA coordinator is compatible with Narayana clients, you need to add an additional dependency for Narayana client:">Helidon LRAコーディネータはNarayanaクライアントと互換性があります。Narayanaクライアントに追加の依存関係を追加する必要があります:</span></p>

<markup
lang="xml"
title="Dependency needed for using Helidon LRA with Narayana compatible coordinator"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.lra&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-lra-coordinator-narayana-client&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h3 id="_narayana"><span class="merged" id="all.9omMY" title="原文 : Narayana">Narayana</span></h3>
<div class="section">
<p><span class="merged" id="all.1I1GcP.spl1" title="原文 : Narayana is a transaction manager supporting LRA."><a href="https://narayana.io" id="" target="_blank" >Narayana</a>は、LRAをサポートするトランザクション・マネージャです。</span> <span class="merged" id="all.1I1GcP.spl2" title="原文 : To use Narayana LRA coordinator with Helidon LRA client you need to add an additional dependency for Narayana client:">Helidon LRAクライアントでNarayana LRAコーディネータを使用するには、Narayanaクライアントに追加の依存関係を追加する必要があります:</span> </p>

<markup
lang="xml"
title="Dependency needed for using Helidon LRA with Narayana coordinator"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.lra&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-lra-coordinator-narayana-client&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.29OGl1" title="原文 : The simplest way to run Narayana LRA coordinator locally:">Narayana LRAコーディネータをローカルで実行する最も簡単な方法:</span></p>

<markup
lang="bash"
title="Downloading and running Narayana LRA coordinator"
>wget https://search.maven.org/remotecontent?filepath=org/jboss/narayana/rts/lra-coordinator-quarkus/5.11.1.Final/lra-coordinator-quarkus-5.11.1.Final-runner.jar \
-O narayana-coordinator.jar \
&amp;&amp; java -Dquarkus.http.port=8070 -jar narayana-coordinator.jar</markup>

<p><span class="merged" id="all.34a7em" title="原文 : Narayana LRA coordinator is running by default under lra-coordinator context, with port 8070 defined in the snippet above you need to configure your Helidon LRA app as follows: mp.lra.coordinator.url=http://localhost:8070/lra-coordinator">Narayana LRAコーディネータはデフォルトで<code>lra-coordinator</code>コンテキストで実行されており、前述のスニペットで定義されたポート<code>8070</code>では、Helidon LRAアプリケーションを次のように構成する必要があります : <code>mp.lra.coordinator.url=http://localhost:8070/lra-coordinator</code></span></p>

</div>
</div>
</doc-view>
