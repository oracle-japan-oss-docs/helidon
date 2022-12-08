<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3s5TxX" title="原文 : Bean Validation Introduction">Beanバリデーションの概要</span></dt>
<dd slot="desc"><p><span class="merged" id="all.EPM2A.spl1" title="原文 : Helidon supports Bean Validation via its integration with JAX-RS/Jersey.">Helidonは、JAX-RS/Jerseyとの統合によるBeanバリデーションをサポートしています。</span> <span class="merged" id="all.EPM2A.spl2" title="原文 : The Jakarta Bean Validation specification defines an API to validate Java beans."><a href="https://projects.eclipse.org/projects/ee4j.bean-validation" id="" target="_blank" >「Jakarta Beanバリデーション仕様」</a>は、Java BeanをバリデートするAPIを定義します。</span> <span class="merged" id="all.EPM2A.spl3" title="原文 : Bean Validation is supported in REST resource classes as well as in regular application beans.">Beanバリデーションは、RESTリソース・クラスおよび通常のアプリケーションBeanでサポートされています。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.6Qjmp" title="原文 : To enable Bean Validation add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Beanバリデーションを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
  &lt;groupId&gt;org.glassfish.jersey.ext&lt;/groupId&gt;
  &lt;artifactId&gt;jersey-bean-validation&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_validation_example_in_helidon_mp"><span class="merged" id="all.L56Lz" title="原文 : Validation Example in Helidon MP">Helidon MPでのバリデーションの例</span></h2>
<div class="section">
<p><span class="merged" id="all.2EVVJu.spl1" title="原文 : The following example shows a simple resource method annotated with @POST whose parameter must be not null and valid.">次の例は、パラメータが<em>「nullでなく」</em>および<em>「有効」</em>である必要がある<code>@POST</code>の注釈が付いた単純なリソース・メソッドを示しています。</span> <span class="merged" id="all.2EVVJu.spl2" title="原文 : Validating a parameter in this case implies making sure that any constraint annotations in the Greeting class are satisfied.">この場合、パラメータを検証することは、<code>Greeting</code>クラスの制約注釈が満たされていることを確認することを意味します。</span> <span class="merged" id="all.2EVVJu.spl3" title="原文 : The resource method shall never be called if the validation fails, with a 400 (Bad Request) status code returned instead.">かわりに400 (Bad Request)ステータス・コードが返されてバリデーションが失敗した場合、リソース・メソッドは呼び出されません。</span> </p>

<markup
lang="java"

>@Path("helloworld")
public class HelloWorld {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void post(@NotNull @Valid Greeting greeting) {
        // ...
    }
}</markup>

</div>
</doc-view>
