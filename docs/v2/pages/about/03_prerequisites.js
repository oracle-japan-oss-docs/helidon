<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.JbgHr"  title="原文:: Get Started">開始</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1yT48s" title="原文 : Everything you need to get started with Helidon is listed here.">Helidonを開始するために必要なものはすべてここにリストされています。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.48TzIN.spl1" title="原文 : Helidon requires Java 11 (or newer) and Maven.">Helidonには、Java 11 (またはそれ以降)およびMavenが必要です。</span> <span class="merged" id="all.48TzIN.spl2" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span> <span class="merged" id="all.48TzIN.spl3" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop).">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタ(<router-link to="/about/05_kubernetes">「デスクトップにインストール」</router-link>も可)が必要です。</span> </p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.29scU2" title="原文 : Java&#160;SE&#160;11 (Open&#160;JDK&#160;11) or newer"><a href="https://www.oracle.com/technetwork/java/javase/downloads" id="" target="_blank" >Java SE 11</a> (<a href="http://jdk.java.net" id="" target="_blank" >Open JDK 11</a>)以上</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nyTbh" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" id="" target="_blank" >Maven 3.6.1+</a></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HtX9I" title="原文 : Docker 18.09+"><a href="https://docs.docker.com/install/" id="" target="_blank" >Docker 18.09+</a></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48aNQe" title="原文 : Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >Kubectl 1.16.5+</a></span></td>
</tr>
</tbody>
</table>
</div>
<markup
lang="bash"
title="前提条件の検証"
>java -version
mvn --version
docker --version
kubectl version --short</markup>

</div>

<h2 id="_setting_java_home"><span class="merged" id="all.1qXDQV"  title="原文:: Setting JAVA_HOME">JAVA_HOMEの設定</span></h2>
<div class="section">
<markup
lang="bash"
title="JAVA_HOMEの設定"
># On Mac
export JAVA_HOME=`/usr/libexec/java_home -v 11`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-11</markup>

</div>

<h2 id="_try_the_quickstart_examples"><span class="merged" id="all.8vBtD" title="原文 : Try the Quickstart Examples">Quickstartの例を試す</span></h2>
<div class="section">
<p><span class="merged" id="all.1c8NIC" title="原文 : Now you are ready to try the Quickstart Examples:">これで、Quickstartの例を試す準備ができました:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3nC9Aw" title="原文 : Helidon MP Quickstart Example"><router-link to="/mp/guides/02_quickstart">Helidon MPクイックスタートの例</router-link></span>

</li>
<li>
<span class="merged" id="all.2SFqDe" title="原文 : Helidon SE Quickstart Example"><router-link to="/se/guides/02_quickstart">Helidon SEクイックスタートの例</router-link></span>

</li>
</ol>
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.4ALrt6" title="原文 : See About Helidon for more information on the differences between Helidon MP and SE.">Helidon MPとSEの違いの詳細は、<router-link to="/about/02_introduction">「Helidonについて」</router-link>を参照してください。</span></p>
</div>
</div>
</doc-view>
