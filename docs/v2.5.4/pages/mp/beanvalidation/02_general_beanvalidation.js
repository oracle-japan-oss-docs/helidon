<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.EtxZT" title="原文 : General Bean Validation">一般Beanバリデーション</span></dt>
<dd slot="desc"><p><span class="merged" id="all.14g5iv.spl1" title="原文 : If bean validation is required outside JAX-RS/Jersey use cases, it is also available in Helidon.">JAX-RS/Jerseyユースケースの外部でBeanバリデーションが必要な場合は、Helidonでも使用できます。</span> <span class="merged" id="all.14g5iv.spl2" title="原文 : It follows the standard Jakarta Bean Validation specification which defines an API to validate Java beans.">これは、Java beansをバリデートするAPIを定義する標準の<a href="https://projects.eclipse.org/projects/ee4j.bean-validation" id="" target="_blank" >「Jakarta Beanバリデーション仕様」</a>に従います。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.1"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.TqIRq" title="原文 : To enable General Bean Validation add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">一般Beanバリデーションを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
  &lt;groupId&gt;io.helidon.microprofile.bean-validation&lt;/groupId&gt;
  &lt;artifactId&gt;helidon-microprofile-bean-validation&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_validation_example_in_helidon_mp"><span class="merged" id="all.L56Lz.1" title="原文 : Validation Example in Helidon MP">Helidon MPでのバリデーションの例</span></h2>
<div class="section">
<p><span class="merged" id="all.17yLNq" title="原文 : The following example shows a simple application with one field declared as not null using @NotNull annotation:">次の例は、<code>@NotNull</code>注釈を使用して<em>「nullでない」</em>として宣言された1つのフィールドを持つ単純なアプリケーションを示しています:</span></p>

<markup
lang="java"

>public class GreetingHolder {
    @NotNull
    private String greeting;
    //...
}</markup>

<p><span class="merged" id="all.VG021" title="原文 : If the bean contains a method parameter annotated with @Valid, and GreetingHolder with null_greeting is passed, then a _ValidationException will be thrown:">Beanに@Validで注釈が付けられたメソッド・パラメータが含まれ、<em>「null_greetingが渡された後、_ValidationExceptionが渡されます」</em>でGreetingHolderがスローされる場合:</span></p>

<markup
lang="java"

>@ApplicationScoped
public class GreetingProvider {
    private GreetingHolder greetingHolder;
    //..
    void setGreeting(@Valid GreetingHolder greetingHolder) {
        this.greetingHolder = greetingHolder;
    }
}</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2RFWZf" title="原文 : beans.xml is required to identify beans and for bean validation to work properly.">Beanを識別し、Beanバリデーションが正常に機能するには、<code>beans.xml</code>が必要です。</span></p>
</div>
<p><span class="merged" id="all.4W0zkC" title="原文 : For more information about the supported validations, see Jakarta Bean Validation specification.">サポートされているバリデーションの詳細は、<a href="https://projects.eclipse.org/projects/ee4j.bean-validation" id="" target="_blank" >「Jakarta Beanバリデーション仕様」</a>を参照してください。</span></p>

</div>
</doc-view>
