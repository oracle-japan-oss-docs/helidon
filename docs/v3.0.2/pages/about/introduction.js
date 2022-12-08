<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.m16Se" title="原文 : What is Helidon?"><router-link @click.native="this.scrollFix('#_what_is_helidon')" to="#_what_is_helidon">Helidonとは何ですか。</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1uqRUp" title="原文 : Helidon Flavors"><router-link @click.native="this.scrollFix('#_helidon_flavors')" to="#_helidon_flavors">Helidonフレーバ</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.4HEbl5" title="原文 : What flavor shall I use?"><router-link @click.native="this.scrollFix('#_what_flavor_shall_i_use')" to="#_what_flavor_shall_i_use">私はどのフレーバを使うべきですか。</router-link></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.1VJKD5" title="原文 : Prerequisites"><router-link @click.native="this.scrollFix('#_prerequisites')" to="#_prerequisites">事前設定</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3mmGoA" title="原文 : Next Steps"><router-link @click.native="this.scrollFix('#_next_steps')" to="#_next_steps">次のステップ</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_what_is_helidon"><span class="merged" id="all.47cEUE" title="原文 : What is Helidon?">Helidonとは何ですか。</span></h2>
<div class="section">
<p><span class="merged" id="all.DJ3Rx.spl1" title="原文 : Helidon is a collection of Java libraries for writing microservices that run on a fast web core powered by Netty."><a href="https://helidon.io" target="_blank">Helidon</a>は、<a href="https://netty.io" target="_blank">Netty</a>で強化された高速webコアで実行されるマイクロサービスを記述するためのJavaライブラリのコレクションです。</span> <span class="merged" id="all.DJ3Rx.spl2" title="原文 : It&rsquo;s small, fast, and fun to use.">小型で高速、使って楽しいです。</span> </p>

<p><span class="merged" id="all.YVQTo.spl1" title="原文 : Helidon is open source under the Apache 2.0 license.">Helidonは、Apache 2.0ライセンスのオープン・ソースです。</span> <span class="merged" id="all.YVQTo.spl2" title="原文 : Sources are available on GitHub.">ソースは<a href="https://github.com/oracle/helidon/tree/master" target="_blank">GitHub</a>で入手できます。</span> </p>

<p><span class="merged" id="all.2v2TlY.spl1" title="原文 : Helidon is cloud-native ready.">Helidonはクラウド・ネイティブに対応しています。</span> <span class="merged" id="all.2v2TlY.spl2" title="原文 : It provides fast start-up time and has low memory consumption and a small disk footprint.">これにより、起動時間が短くなり、メモリー消費量が少なく、ディスク・フットプリントも小さくなります。</span> <span class="merged" id="all.2v2TlY.spl3" title="原文 : It also comes with a full observability stack out of the box including health checks, metrics, tracing and logging.">また、ヘルス・チェック、メトリクス、トレースおよびロギングなど、すぐに使用できる可観測性スタックも備えています。</span> </p>

<p><span class="merged" id="all.19fVHt" title="原文 : Helidon fully supports GraalVM native image allowing you to build a native executable from your Java application.">Helidonは、GraalVMネイティブ・イメージを完全にサポートしており、Javaアプリケーションからネイティブ実行可能ファイルを構築できます。</span></p>

</div>


<h2 id="_helidon_flavors"><span class="merged" id="all.26qf5O" title="原文 : Helidon Flavors">Helidonフレーバ</span></h2>
<div class="section">
<p><span class="merged" id="all.SWh6.spl1" title="原文 : Helidon comes in two flavors: Helidon SE and Helidon MP.">Helidonは2つのフレーバにあります: <strong>Helidon SE</strong>および<strong>Helidon MP</strong>。</span> <span class="merged" id="all.SWh6.spl2" title="原文 : Think about these flavors as frameworks providing similar functionality but offering different developer experiences.">これらのフレーバは、類似した機能を提供するが、異なる開発者エクスペリエンスを提供するフレームワークと考えてください。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1CNEMU" title="原文 : Helidon SE"><strong>Helidon SE</strong></span></th>
<th><span class="merged" id="all.2HO33T" title="原文 : Helidon MP"><strong>Helidon MP</strong></span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.34pmHZ" title="原文 : Gives you full transparency and puts you in control.">完全な透明性を確保し、コントロールできます。</span></td>
<td class=""><span class="merged" id="all.43KDcM" title="原文 : Built on top of the Helidon SE libraries and provides a platform that is familiar to enterprise Java developers.">Helidon SEライブラリ上に構築され、エンタープライズJava開発者に慣れたプラットフォームを提供します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QUYdK" title="原文 : Microframework model with a very small footprint and limited functionality (~7 MB).">非常に小さなフットプリントと機能が限定されたマイクロフレームワーク・モデル(~7 MB)。</span></td>
<td class=""><span class="merged" id="all.1imxzx" title="原文 : MicroProfile implementation; slightly larger footprint than SE (~13 MB)."><a href="https://projects.eclipse.org/proposals/eclipse-microprofile" target="_blank">MicroProfile</a>の実装。SE (~13 MB)よりわずかに大きいフットプリント。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.JZ9mk" title="原文 : Functional style, reactive, non-blocking.">機能スタイル、リアクティブ、非ブロッキング。</span></td>
<td class=""><span class="merged" id="all.3HpPz2" title="原文 : Declarative style with dependency injection.">依存関係インジェクションを使用した宣言的なスタイル。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Rqhq3" title="原文 : Transparent &quot;no magic&quot; development experience; pure java application development with no annotations and no dependency injections.">透過的な「マジックなし」の開発エクスペリエンス。注釈なしの純粋なjavaアプリケーションの開発と依存関係のインジェクション。</span></td>
<td class=""><span class="merged" id="all.5d2tM" title="原文 : Developer experience similar to that of Spring Boot, Jakarta EE and MicroProfile; layers on some Jakarta EE components (CDI, JAX-RS, JSON-P, JSON-B).">開発者は、Spring Boot、Jakarta EEおよびMicroProfile、一部のJakarta EEコンポーネント(CDI、JAX-RS、JSON-P、JSON-B)のレイヤーと同様の経験があります。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2PKABw" title="原文 : Learn more about Helidon SE."><router-link to="/se/introduction">Helidon SE</router-link>についてさらに学習します。</span></td>
<td class=""><span class="merged" id="all.2TLXjD" title="原文 : Learn more about Helidon MP."><router-link to="/mp/introduction">Helidon MP</router-link>についてさらに学習します。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.429Hlw.spl1" title="原文 : To help illustrate the differences, below are two samples implementing a simple RESTful service.">違いを説明するために、次に単純なRESTfulサービスを実装する2つのサンプルを示します。</span> <span class="merged" id="all.429Hlw.spl2" title="原文 : One uses Helidon SE, the other Helidon MP.">1つは、もう1つのHelidon MPであるHelidon SEを使用します。</span> </p>

<markup
lang="java"
title="Helidon SE sample"
>Routing routing = Routing.builder()
    .get("/hello",
        (req, res) -&gt; res.send("Hello World"))
    .build();

WebServer.create(routing)
    .start();</markup>

<markup
lang="java"
title="Helidon MP sample"
>@Path("hello")
public class HelloWorld {
    @GET
    public String hello() {
        return "Hello World";
    }
}</markup>


<h3 id="_what_flavor_shall_i_use"><span class="merged" id="all.1eyoLJ" title="原文 : What flavor shall I use?">私はどのフレーバを使うべきですか。</span></h3>
<div class="section">
<p><span class="merged" id="all.vkYN4" title="原文 : Use Helidon SE if">Helidon SEを使用する場合</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3XmzA4" title="原文 : Performance is your main goal.">パフォーマンスがあなたの主な目標です。</span></p>

</li>
<li>
<p><span class="merged" id="all.1oGL4f" title="原文 : You are familiar with reactive programming.">リアクティブ・プログラミングに精通しています。</span></p>

</li>
<li>
<p><span class="merged" id="all.4PmkTa" title="原文 : Your application is heavily using concurrency.">アプリケーションは同時実行性を多く使用しています。</span></p>

</li>
<li>
<p><span class="merged" id="all.1HWUAj" title="原文 : You are not planning to use any CDI-based components.">CDIベースのコンポーネントを使用する予定はありません。</span></p>

</li>
<li>
<p><span class="merged" id="all.1nMfxC" title="原文 : You want to use a minimum number of third-party dependencies.">サードパーティ依存関係の最小数を使用します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.2XaGdE" title="原文 : Use Helidon MP if">Helidon MPを使用する場合</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3AcTCk" title="原文 : You want to base your application on modern enterprise Java standards such as Jakarta EE and MicroProfile.">あなたは、Jakarta EEやMicroProfileなど、最新のエンタープライズJava標準に基づいてアプリケーションを構築しようと考えています。</span></p>

</li>
<li>
<p><span class="merged" id="all.2ofaT9" title="原文 : You are familiar with Java EE, Jakarta EE or Spring Boot and would like to have a similar development experience.">Java EE、Jakarta EEまたはSpring Bootに精通しており、同様の開発経験を希望しています。</span></p>

</li>
<li>
<p><span class="merged" id="all.dLtWn" title="原文 : You are migrating existing Java EE/Jakarta EE application to microservices.">既存のJava EE/Jakarta EEアプリケーションをマイクロサービスに移行しています。</span></p>

</li>
<li>
<p><span class="merged" id="all.4U83ke" title="原文 : You are planning to use CDI components or extensions.">CDIコンポーネントまたは拡張機能の使用を計画しています。</span></p>

</li>
<li>
<p><span class="merged" id="all.41AxOq" title="原文 : You are planning to use JPA for data access and Jersey (JAX-RS) for RESTful services.">あなたは、JPAをデータ・アクセスに使用し、Jersey (JAX-RS)をRESTfulサービスに使用することを計画しています。</span></p>

</li>
</ul>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.2N8aoQ" title="原文 : If you don&rsquo;t know which Helidon flavor to use - use Helidon MP.">使用するHelidonフレーバが不明な場合 - <strong>Helidon MP</strong>を使用します。</span></p>
</p>
</div>

</div>

</div>


<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc.1"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.Spi7a.spl1" title="原文 : Helidon requires Java and Maven.">Helidonには、JavaおよびMavenが必要です。</span> <span class="merged" id="all.Spi7a.spl2" title="原文 : You might also need Docker and Kubernetes depending on how you plan to deploy your services.">サービスのデプロイ方法によっては、DockerおよびKubernetesも必要になる場合があります。</span> </p>

<div class="block-title"><span class="merged" id="all.1bFclg" title="原文 : Prerequisite product versions for Helidon 3.0.2"><span>Helidon 3.0.2の前提条件製品バージョン</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2sRt9f" title="原文 : Java&#160;SE&#160;17 (Open&#160;JDK&#160;17)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java&#160;SE&#160;17</a> (<a href="http://jdk.java.net" target="_blank">Open&#160;JDK&#160;17</a>)</span></td>
<td class=""><span class="merged" id="all.3aBChT" title="原文 : Helidon requires Java 17+.">HelidonにはJava 17以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1DYqqk.1" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.3Nwu95" title="原文 : We also strongly suggest installing the Helidon CLI (command line interface) which helps in generating and building Helidon projects.">また、Helidonプロジェクトの生成および構築に役立つ<router-link to="/about/cli">Helidon CLI</router-link> (コマンドライン・インタフェース)のインストールも強くお薦めします。</span></p>

</div>


<h2 id="_migration"><span class="merged" id="all.1Cqw65"  title="原文:: Migration">移行</span></h2>
<div class="section">
<p><span class="merged" id="all.1qy9bX" title="原文 : In case you need to upgrade the version of Helidon, follow the Migration Guides.">Helidonのバージョンをアップグレードする必要がある場合は、<code>Migration Guides</code>に従います。</span></p>

<p><span class="merged" id="all.24gmPl" title="原文 : For migration from Helidon 1.x to 2.x:">Helidon 1.xから2.xへの移行の場合:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4ULYkv" title="原文 : Helidon SE 2x Migration Guide"><router-link to="/se/guides/migration">Helidon SE 2x移行ガイド</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1H3e5Q" title="原文 : Helidon MP 2x Migration Guide"><router-link to="/mp/guides/migration">Helidon MP 2x移行ガイド</router-link></span></p>

</li>
</ul>

<p><span class="merged" id="all.1SsHN3" title="原文 : For migration from Helidon 2.x to 3.x:">Helidon 2.xから3.xへの移行の場合:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3nTlVy" title="原文 : Helidon SE 3x Migration Guide"><router-link to="/se/guides/migration_3x">Helidon SE 3x移行ガイド</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.28gyit" title="原文 : Helidon MP 3x Migration Guide"><router-link to="/mp/guides/migration_3x">Helidon MP 3x移行ガイド</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_next_steps"><span class="merged" id="all.iDczO"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<p><span class="merged" id="all.1y4Vog.spl1" title="原文 : Choose a Helidon flavor to explore and start using it.">Helidonフレーバを選択して探索し、使用を開始します。</span> <span class="merged" id="all.1y4Vog.spl2" title="原文 : Check out the following:">次の項目を確認してください:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.bxyQV" title="原文 : Helidon SE Documentation"><router-link to="/se/introduction">Helidon SEドキュメント</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.6Rjsi" title="原文 : Helidon MP Documentation"><router-link to="/mp/introduction">Helidon MPドキュメント</router-link></span></p>

</li>
</ul>

</div>

</doc-view>
