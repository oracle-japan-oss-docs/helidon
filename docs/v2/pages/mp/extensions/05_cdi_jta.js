<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2R21m3" title="原文 : CDI extension for JTA">JTAのCDI拡張機能</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2WasSy" title="原文 : This CDI portable extension provides support for JTA (Java Transaction API) transactions in your Helidon MicroProfile applications.">この<a href="https://docs.jboss.org/cdi/spec/2.0/cdi-spec.html#spi" id="" target="_blank" >「CDIポータブル拡張機能」</a>では、Helidon MicroProfileアプリケーションでJTA (Java Transaction API)トランザクションをサポートしています。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_prerequsites"><span class="merged" id="all.4bi3vm" title="原文 : Prerequsites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.34KtMl" title="原文 : Declare the following dependency fragment in your project&rsquo;s pom.xml:">プロジェクトの<code>pom.xml</code>で次の依存性フラグメントを宣言します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
  &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
  &lt;artifactId&gt;helidon-integrations-cdi-jta-weld&lt;/artifactId&gt;
  &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
  &lt;groupId&gt;javax.transaction&lt;/groupId&gt;
  &lt;artifactId&gt;javax.transaction-api&lt;/artifactId&gt;
  &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_declaring_a_method_to_be_transactional"><span class="merged" id="all.25ZKtD" title="原文 : Declaring a method to be transactional">トランザクションに関与するメソッドの宣言</span></h2>
<div class="section">
<p><span class="merged" id="all.3B4rao" title="原文 : The following example shows how to declare a transactional method.">次の例は、トランザクション・メソッドの宣言方法を示しています。</span></p>

<markup
lang="java"
title="トランザクション・メソッド宣言"
>@Transactional(Transactional.TxType.REQUIRED)
public void doSomethingTransactionally() {

}</markup>

<p><span class="merged" id="all.3tUcef.spl1" title="原文 : The extension ensures that a transaction is started before and committed after the method executes.">この拡張機能により、トランザクションはメソッドの実行前に開始され、実行後にコミットされます。</span> <span class="merged" id="all.3tUcef.spl2" title="原文 : If the method throws an exception, the transaction will be rolled back.">メソッドが例外をスローした場合、トランザクションはロールバックされます。</span> </p>

<p><span class="merged" id="all.JLF7F.spl1" title="原文 : You can further specify the transactional behavior of the extension by using different instances of the Transactional annotation."><code>Transactional</code>注釈の異なるインスタンスを使用して、拡張機能のトランザクション動作をさらに指定できます。</span> <span class="merged" id="all.JLF7F.spl2" title="原文 : For more information, see the Transactional annotation documentation.">詳細は、<a href="https://static.javadoc.io/javax.transaction/javax.transaction-api/1.2/javax/transaction/Transactional.html" id="" target="_blank" >「<code>Transactional</code>注釈のドキュメント」</a>を参照してください。</span> </p>

<p><span class="merged" id="all.1t0gDt.spl1" title="原文 : Transactional method support is implemented by CDI interception facilities.">トランザクション・メソッドのサポートはCDIインターセプト機能によって実装されます。</span> <span class="merged" id="all.1t0gDt.spl2" title="原文 : Among other things, this means that the method to which you apply the Transactional annotation must not be private and must in all other ways be a business method.">つまり、<code>Transactional</code>注釈を適用するメソッドは、<code>private</code>であってはならず、他のすべての方法が<em>「ビジネス・メソッド」</em>である必要があります。</span> <span class="merged" id="all.1t0gDt.spl3" title="原文 : See the Java Interceptors specification for more details.">詳細は、<a href="https://jcp.org/aboutJava/communityprocess/mrel/jsr318/index3.html" id="" target="_blank" >「Javaインターセプタ仕様」</a>を参照してください。</span> </p>

<p><span class="merged" id="all.1Mzh22" title="原文 : During a transactional method invocation, the extension makes the following objects available for injection via the Inject annotation:">トランザクション・メソッドの呼出し時に、拡張機能は次のオブジェクトを<code>Inject</code>注釈を介してインジェクションできるようにします:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2ETdze"  title="原文:: UserTransaction"><a href="https://static.javadoc.io/javax.transaction/javax.transaction-api/1.2/javax/transaction/UserTransaction.html" id="" target="_blank" ><code>UserTransaction</code></a></span></p>

</li>
<li>
<p><span class="merged" id="all.1DVU1"  title="原文:: Transaction"><a href="https://static.javadoc.io/javax.transaction/javax.transaction-api/1.2/javax/transaction/Transaction.html" id="" target="_blank" ><code>Transaction</code></a></span></p>

</li>
<li>
<p><span class="merged" id="all.3aki15"  title="原文:: TransactionManager"><a href="https://static.javadoc.io/javax.transaction/javax.transaction-api/1.2/javax/transaction/UserTransactionManager.html" id="" target="_blank" ><code>TransactionManager</code></a></span></p>

</li>
<li>
<p><span class="merged" id="all.3opEXw" title="原文 : TransactionSynchronizationRegistry"><a href="https://static.javadoc.io/javax.transaction/javax.transaction-api/1.2/javax/transaction/UserTransactionSynchronizationRegistry.html" id="" target="_blank" ><code>TransactionSynchronizationRegistry</code></a></span></p>

</li>
</ul>
</div>
</doc-view>
