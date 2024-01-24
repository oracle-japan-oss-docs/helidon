<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2Rbojm.spl1" title="原文 : Helidon supports Bean Validation via its integration with JAX-RS/Jersey.">Helidonは、JAX-RS/Jerseyとの統合によるBeanバリデーションをサポートしています。</span> <span class="merged" id="all.2Rbojm.spl2" title="原文 : The Jakarta Bean Validation specification defines an API to validate Java beans."><a href="https://jakarta.ee/specifications/bean-validation/3.0/bean-validation_3.0.html" target="_blank">「Jakarta Beanバリデーション仕様」</a>は、Java BeanをバリデートするAPIを定義します。</span> <span class="merged" id="all.2Rbojm.spl3" title="原文 : Bean Validation is supported in REST resource classes as well as in regular application beans.">Beanバリデーションは、RESTリソース・クラスおよび通常のアプリケーションBeanでサポートされています。</span> </p>

<p><span class="merged" id="all.1LTzQH.spl1" title="原文 : If bean validation is required outside JAX-RS/Jersey use cases, it is also available in Helidon.">JAX-RS/Jerseyユースケースの外部でBeanバリデーションが必要な場合は、Helidonでも使用できます。</span> <span class="merged" id="all.1LTzQH.spl2" title="原文 : It follows the standard Jakarta Bean Validation specification which defines an API to validate Java beans.">これは、Java beansをバリデートするAPIを定義する標準の<a href="https://jakarta.ee/specifications/bean-validation/3.0/bean-validation_3.0.html" target="_blank">「Jakarta Beanバリデーション仕様」</a>に従います。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2MtXl4" title="原文 : To enable Bean Validation add the following dependency to your project’s pom.xml (see Managing Dependencies).">Beanバリデーションを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
  &lt;groupId&gt;org.glassfish.jersey.ext&lt;/groupId&gt;
  &lt;artifactId&gt;jersey-bean-validation&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.4FesZp" title="原文 : For general validation, please add to your pom.xml:">一般的なバリデーションの場合は、<code>pom.xml</code>に追加してください:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
  &lt;groupId&gt;io.helidon.microprofile.bean-validation&lt;/groupId&gt;
  &lt;artifactId&gt;helidon-microprofile-bean-validation&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.2ErCB0.spl1" title="原文 : The specification defines a small set of built-in constraints.">仕様では、少数の組込み制約セットを定義します。</span> <span class="merged" id="all.2ErCB0.spl2" title="原文 : Their usage is encouraged both in regular constraint declarations and as composing constraints.">これらの使用方法は、通常の制約宣言と制約の構成の両方で推奨されます。</span> <span class="merged" id="all.2ErCB0.spl3" title="原文 : Using this set of constraints will enhance portability of your constraints across constraint-consuming frameworks relying on the metadata API (such as client side validation frameworks or database schema generation frameworks).">この一連の制約を使用すると、メタデータAPI (クライアント側のバリデーション・フレームワークやデータベース・スキーマ生成フレームワークなど)に依存する制約を伴うフレームワーク間で制約の移植性を強化できます。</span> </p>

<p><span class="merged" id="all.2ASAs9.spl1" title="原文 : Built-in annotations are annotated with an empty @Constraint annotation to avoid any dependency between the specification API and a specific implementation.">組込み注釈には、仕様APIと特定の実装間の依存関係を回避するために空の<code>@Constraint</code>注釈が付きます。</span> <span class="merged" id="all.2ASAs9.spl2" title="原文 : Each Jakarta Bean Validation provider must recognize built-in constraint annotations as valid constraint definitions and provide compliant constraint implementations for each.">各Jakarta Beanバリデーション・プロバイダは、組込み制約注釈を有効な制約定義として認識し、それぞれに準拠した制約実装を提供する必要があります。</span> <span class="merged" id="all.2ASAs9.spl3" title="原文 : The built-in constraint validation implementation is having a lower priority than an XML mapping definition.">組込み制約バリデーションの実装では、XMLマッピング定義よりも優先度が低くなっています。</span> <span class="merged" id="all.2ASAs9.spl4" title="原文 : In other words ConstraintValidator implementations for built-in constraints can be overridden by using the XML mapping (see Overriding constraint definitions in XML).">つまり、組込み制約のConstraintValidator実装は、XMLマッピングを使用してオーバーライドできます(XMLの制約定義のオーバーライドを参照)。</span> </p>

<p><span class="merged" id="all.1pORot.spl1" title="原文 : All built-in constraints are in the jakarta.validation.constraints package.">すべての組込み制約は、<code>jakarta.validation.constraints</code>パッケージにあります。</span> <span class="merged" id="all.1pORot.spl2" title="原文 : Here is the list of constraints and their declaration.">制約とその宣言のリストを次に示します。</span> </p>


<div class="table__overflow elevation-1  flex sm10
">
<table class="datatable table">
<colgroup>
<col style="width: 28.571%;">
<col style="width: 71.429%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1mFIlG"  title="原文:: Annotation">注釈</span></th>
<th><span class="merged" id="all.4JM9z7.1"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2W90Ru"  title="原文: @Null"><code>@Null</code></span></td>
<td class=""><span class="merged" id="all.3AkanP.spl1" title="原文 : The annotated element must be null.">注釈付き要素は<code>null</code>である必要があります。</span> <span class="merged" id="all.3AkanP.spl2" title="原文 : Accepts any type.">任意のタイプを受け入れます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Ls7mI"  title="原文: @NotNull"><code>@NotNull</code></span></td>
<td class=""><span class="merged" id="all.1M9CN7.spl1" title="原文 : The annotated element must not be null.">注釈付き要素は<code>null</code>にできません。</span> <span class="merged" id="all.1M9CN7.spl2" title="原文 : Accepts any type.">任意のタイプを受け入れます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2HAAmG"  title="原文: @AssertTrue"><code>@AssertTrue</code></span></td>
<td class=""><span class="merged" id="all.2JcjAl.spl1" title="原文 : The annotated element must be true.">注釈付き要素はtrueである必要があります。</span> <span class="merged" id="all.2JcjAl.spl2" title="原文 : Supported types are boolean and Boolean.">サポートされているタイプは、<code>boolean</code>および<code>Boolean</code>です。</span> <span class="merged" id="all.2JcjAl.spl3" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Y6bYn"  title="原文: @AssertFalse"><code>@AssertFalse</code></span></td>
<td class=""><span class="merged" id="all.4dId7p.spl1" title="原文 : The annotated element must be false.">注釈付き要素はfalseである必要があります。</span> <span class="merged" id="all.4dId7p.spl2" title="原文 : Supported types are boolean and Boolean.">サポートされているタイプは、<code>boolean</code>および<code>Boolean</code>です。</span> <span class="merged" id="all.4dId7p.spl3" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.di1PI"  title="原文: @Min"><code>@Min</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Fz5zx" title="原文 : The annotated element must be a number whose value must be higher or equal to the specified minimum.">注釈付き要素は、指定された最小値以上である必要がある数値である必要があります。</span></p>

<p><span class="merged" id="all.1eJuV3"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.379OCF"  title="原文: BigDecimal"><code>BigDecimal</code></span></p>

</li>
<li>
<p><span class="merged" id="all.38UGo3"  title="原文: BigInteger"><code>BigInteger</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1UmkoZ" title="原文 : byte, short, int, long, and their respective wrappers"><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>およびそれぞれのラッパー</span></p>

</li>
</ul>

<p><span class="merged" id="all.4aiy9F" title="原文 : Note that double and float are not supported due to rounding errors (some providers might provide some approximative support).">端数処理エラーのため、<code>double</code>および<code>float</code>はサポートされていません(一部のプロバイダは近似サポートを提供する場合があります)。</span></p>

<p><span class="merged" id="all.2CisNo" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.epTk0"  title="原文: @Max"><code>@Max</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Fz5zx.1" title="原文 : The annotated element must be a number whose value must be higher or equal to the specified minimum.">注釈付き要素は、指定された最小値以上である必要がある数値である必要があります。</span></p>

<p><span class="merged" id="all.1eJuV3.1"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.379OCF.1"  title="原文: BigDecimal"><code>BigDecimal</code></span></p>

</li>
<li>
<p><span class="merged" id="all.38UGo3.1"  title="原文: BigInteger"><code>BigInteger</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1UmkoZ.1" title="原文 : byte, short, int, long, and their respective wrappers"><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>およびそれぞれのラッパー</span></p>

</li>
</ul>

<p><span class="merged" id="all.4aiy9F.1" title="原文 : Note that double and float are not supported due to rounding errors (some providers might provide some approximative support).">端数処理エラーのため、<code>double</code>および<code>float</code>はサポートされていません(一部のプロバイダは近似サポートを提供する場合があります)。</span></p>

<p><span class="merged" id="all.2CisNo.1" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Ki2oi"  title="原文: @DecimalMin"><code>@DecimalMin</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Ye6gA" title="原文 : The annotated element must be a number whose value must be lower or equal to the specified maximum.">注釈付き要素は、指定された最大値以下の値を持つ数値である必要があります。</span></p>

<p><span class="merged" id="all.1eJuV3.2"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.379OCF.2"  title="原文: BigDecimal"><code>BigDecimal</code></span></p>

</li>
<li>
<p><span class="merged" id="all.38UGo3.2"  title="原文: BigInteger"><code>BigInteger</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1UmkoZ.2" title="原文 : byte, short, int, long, and their respective wrappers"><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>およびそれぞれのラッパー</span></p>

</li>
</ul>

<p><span class="merged" id="all.4aiy9F.2" title="原文 : Note that double and float are not supported due to rounding errors (some providers might provide some approximative support).">端数処理エラーのため、<code>double</code>および<code>float</code>はサポートされていません(一部のプロバイダは近似サポートを提供する場合があります)。</span></p>

<p><span class="merged" id="all.2CisNo.2" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1LpE7Y"  title="原文: @DecimalMax"><code>@DecimalMax</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Ye6gA.1" title="原文 : The annotated element must be a number whose value must be lower or equal to the specified maximum.">注釈付き要素は、指定された最大値以下の値を持つ数値である必要があります。</span></p>

<p><span class="merged" id="all.1eJuV3.3"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.379OCF.3"  title="原文: BigDecimal"><code>BigDecimal</code></span></p>

</li>
<li>
<p><span class="merged" id="all.38UGo3.3"  title="原文: BigInteger"><code>BigInteger</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1UmkoZ.3" title="原文 : byte, short, int, long, and their respective wrappers"><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>およびそれぞれのラッパー</span></p>

</li>
</ul>

<p><span class="merged" id="all.4aiy9F.3" title="原文 : Note that double and float are not supported due to rounding errors (some providers might provide some approximative support).">端数処理エラーのため、<code>double</code>および<code>float</code>はサポートされていません(一部のプロバイダは近似サポートを提供する場合があります)。</span></p>

<p><span class="merged" id="all.2CisNo.3" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3uUivQ"  title="原文: @Negative"><code>@Negative</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1bOyaN" title="原文 : The annotated element must be a strictly negative number (i.e. 0 is considered as an invalid value).">注釈付き要素は、厳密に負の数値である必要があります(i.e。0は無効な値とみなされます)。</span></p>

<p><span class="merged" id="all.1eJuV3.4"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.379OCF.4"  title="原文: BigDecimal"><code>BigDecimal</code></span></p>

</li>
<li>
<p><span class="merged" id="all.38UGo3.4"  title="原文: BigInteger"><code>BigInteger</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1UmkoZ.4" title="原文 : byte, short, int, long, and their respective wrappers"><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>およびそれぞれのラッパー</span></p>

</li>
</ul>

<p><span class="merged" id="all.2CisNo.4" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1s0iJc"  title="原文: @NegativeOrZero"><code>@NegativeOrZero</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3L7g5x" title="原文 : The annotated element must be a negative number or 0.">注釈付き要素は負の数値または0である必要があります。</span></p>

<p><span class="merged" id="all.1eJuV3.5"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.379OCF.5"  title="原文: BigDecimal"><code>BigDecimal</code></span></p>

</li>
<li>
<p><span class="merged" id="all.38UGo3.5"  title="原文: BigInteger"><code>BigInteger</code></span></p>

</li>
<li>
<p><span class="merged" id="all.47fnfO" title="原文 : byte, short, int, long, float, or double and their respective wrappers"><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>float</code>、または<code>double</code>およびそれぞれのラッパー</span></p>

</li>
</ul>

<p><span class="merged" id="all.2CisNo.5" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41pAa3"  title="原文: @Positive"><code>@Positive</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Xlawl" title="原文 : The annotated element must be a strictly positive number (i.e. 0 is considered as an invalid value).">注釈付き要素は、厳密に正の数である必要があります(i.e。0は無効な値とみなされます)。</span></p>

<p><span class="merged" id="all.1eJuV3.6"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.379OCF.6"  title="原文: BigDecimal"><code>BigDecimal</code></span></p>

</li>
<li>
<p><span class="merged" id="all.38UGo3.6"  title="原文: BigInteger"><code>BigInteger</code></span></p>

</li>
<li>
<p><span class="merged" id="all.47fnfO.1" title="原文 : byte, short, int, long, float, or double and their respective wrappers"><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>float</code>、または<code>double</code>およびそれぞれのラッパー</span></p>

</li>
</ul>

<p><span class="merged" id="all.2CisNo.6" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1FfX0g"  title="原文: @PositiveOrZero"><code>@PositiveOrZero</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2iDqcx" title="原文 : The annotated element must be a positive number or 0.">注釈付き要素は正の数または0である必要があります。</span></p>

<p><span class="merged" id="all.1eJuV3.7"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.379OCF.7"  title="原文: BigDecimal"><code>BigDecimal</code></span></p>

</li>
<li>
<p><span class="merged" id="all.38UGo3.7"  title="原文: BigInteger"><code>BigInteger</code></span></p>

</li>
<li>
<p><span class="merged" id="all.47fnfO.2" title="原文 : byte, short, int, long, float, or double and their respective wrappers"><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>float</code>、または<code>double</code>およびそれぞれのラッパー</span></p>

</li>
</ul>

<p><span class="merged" id="all.2CisNo.7" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.KIM9A"  title="原文: @Size"><code>@Size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.qmDMN.spl1" title="原文 : The annotated element size must be between the specified boundaries (included).">注釈付き要素サイズは、指定された境界(含まれる)の間にする必要があります。</span> <span class="merged" id="all.qmDMN.spl2" title="原文 : Supported types are: * CharSequence - length of character sequence is evaluated * Collection - collection size is evaluated * Map - map size is evaluated * Array (array length is evaluated)">サポートされているタイプ: * <code>CharSequence</code> - 文字シーケンスの長さが評価されます* <code>Collection</code> - コレクションのサイズが評価されます* <code>Map</code> - マップ・サイズは評価されます* <code>Array</code> (配列長は評価されます)</span> </p>

<p><span class="merged" id="all.2CisNo.8" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IjXUN"  title="原文: @Digits"><code>@Digits</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2HBKum" title="原文 : The annotated element must be a number within accepted range.">注釈付き要素は、受け入れられた範囲内の数値である必要があります。</span></p>

<p><span class="merged" id="all.1eJuV3.8"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.379OCF.8"  title="原文: BigDecimal"><code>BigDecimal</code></span></p>

</li>
<li>
<p><span class="merged" id="all.38UGo3.8"  title="原文: BigInteger"><code>BigInteger</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1xUZwG"  title="原文: CharSequence"><code>CharSequence</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3pdeWu" title="原文 : byte, short, int, long, and their respective wrapper types"><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>およびそれぞれのラッパー・タイプ</span></p>

</li>
</ul>

<p><span class="merged" id="all.2CisNo.9" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2TjqxP"  title="原文: @Past"><code>@Past</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2hwGW8.spl1" title="原文 : The annotated element must be an instant, date or time in the past or in the present.">注釈付き要素は、過去または現在のインスタント、日付または時間である必要があります。</span> <span class="merged" id="all.2hwGW8.spl2" title="原文 : Now is defined by the ClockProvider attached to the Validator or ValidatorFactory."><code>Now</code>は、<code>Validator</code>または<code>ValidatorFactory</code>にアタッチされた<code>ClockProvider</code>によって定義されます。</span> <span class="merged" id="all.2hwGW8.spl3" title="原文 : The default clockProvider defines the current time according to the virtual machine, applying the current default time zone if needed.">デフォルトの<code>clockProvider</code>では、仮想マシンに従って現在の時間を定義し、必要に応じて現在のデフォルト・タイムゾーンを適用します。</span> </p>

<p><span class="merged" id="all.1eJuV3.9"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.QdCum"  title="原文: java.util.Date"><code>java.util.Date</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2dO0w"  title="原文: java.util.Calendar"><code>java.util.Calendar</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2dJEkq"  title="原文: java.time.Instant"><code>java.time.Instant</code></span></p>

</li>
<li>
<p><span class="merged" id="all.Bdz2B"  title="原文: java.time.LocalDate"><code>java.time.LocalDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4IHxIV"  title="原文: java.time.LocalDateTime"><code>java.time.LocalDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3LnRKw"  title="原文: java.time.LocalTime"><code>java.time.LocalTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3AAVu"  title="原文: java.time.MonthDay"><code>java.time.MonthDay</code></span></p>

</li>
<li>
<p><span class="merged" id="all.Owl9y"  title="原文: java.time.OffsetDateTime"><code>java.time.OffsetDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2MHpVD"  title="原文: java.time.OffsetTime"><code>java.time.OffsetTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1pRGcN"  title="原文: java.time.Year"><code>java.time.Year</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1ZJKyy"  title="原文: java.time.YearMonth"><code>java.time.YearMonth</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2IuHxs"  title="原文: java.time.ZonedDateTime"><code>java.time.ZonedDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3IUYDD"  title="原文: java.time.chrono.HijrahDate"><code>java.time.chrono.HijrahDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3kNKPI"  title="原文: java.time.chrono.JapaneseDate"><code>java.time.chrono.JapaneseDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.kY07a"  title="原文: java.time.chrono.MinguoDate"><code>java.time.chrono.MinguoDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1jm4OS"  title="原文: java.time.chrono.ThaiBuddhistDate"><code>java.time.chrono.ThaiBuddhistDate</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.2CisNo.10" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Cgqvz"  title="原文: @PastOrPresent"><code>@PastOrPresent</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2hwGW8.1.spl1" title="原文 : The annotated element must be an instant, date or time in the past or in the present.">注釈付き要素は、過去または現在のインスタント、日付または時間である必要があります。</span> <span class="merged" id="all.2hwGW8.1.spl2" title="原文 : Now is defined by the ClockProvider attached to the Validator or ValidatorFactory."><code>Now</code>は、<code>Validator</code>または<code>ValidatorFactory</code>にアタッチされた<code>ClockProvider</code>によって定義されます。</span> <span class="merged" id="all.2hwGW8.1.spl3" title="原文 : The default clockProvider defines the current time according to the virtual machine, applying the current default time zone if needed.">デフォルトの<code>clockProvider</code>では、仮想マシンに従って現在の時間を定義し、必要に応じて現在のデフォルト・タイムゾーンを適用します。</span> </p>

<p><span class="merged" id="all.1eJuV3.10"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.QdCum.1"  title="原文: java.util.Date"><code>java.util.Date</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2dO0w.1"  title="原文: java.util.Calendar"><code>java.util.Calendar</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2dJEkq.1"  title="原文: java.time.Instant"><code>java.time.Instant</code></span></p>

</li>
<li>
<p><span class="merged" id="all.Bdz2B.1"  title="原文: java.time.LocalDate"><code>java.time.LocalDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4IHxIV.1"  title="原文: java.time.LocalDateTime"><code>java.time.LocalDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3LnRKw.1"  title="原文: java.time.LocalTime"><code>java.time.LocalTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3AAVu.1"  title="原文: java.time.MonthDay"><code>java.time.MonthDay</code></span></p>

</li>
<li>
<p><span class="merged" id="all.Owl9y.1"  title="原文: java.time.OffsetDateTime"><code>java.time.OffsetDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2MHpVD.1"  title="原文: java.time.OffsetTime"><code>java.time.OffsetTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1pRGcN.1"  title="原文: java.time.Year"><code>java.time.Year</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1ZJKyy.1"  title="原文: java.time.YearMonth"><code>java.time.YearMonth</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2IuHxs.1"  title="原文: java.time.ZonedDateTime"><code>java.time.ZonedDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3IUYDD.1"  title="原文: java.time.chrono.HijrahDate"><code>java.time.chrono.HijrahDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3kNKPI.1"  title="原文: java.time.chrono.JapaneseDate"><code>java.time.chrono.JapaneseDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.kY07a.1"  title="原文: java.time.chrono.MinguoDate"><code>java.time.chrono.MinguoDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1jm4OS.1"  title="原文: java.time.chrono.ThaiBuddhistDate"><code>java.time.chrono.ThaiBuddhistDate</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.2CisNo.11" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Cgqvz.1"  title="原文: @PastOrPresent"><code>@PastOrPresent</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1bLUWC.spl1" title="原文 : The annotated element must be an instant, date or time in the future.">注釈付き要素は、将来のインスタント、日付または時間である必要があります。</span> <span class="merged" id="all.1bLUWC.spl2" title="原文 : Now is defined by the ClockProvider attached to the Validator or ValidatorFactory."><code>Now</code>は、<code>Validator</code>または<code>ValidatorFactory</code>にアタッチされた<code>ClockProvider</code>によって定義されます。</span> <span class="merged" id="all.1bLUWC.spl3" title="原文 : The default clockProvider defines the current time according to the virtual machine, applying the current default time zone if needed.">デフォルトの<code>clockProvider</code>では、仮想マシンに従って現在の時間を定義し、必要に応じて現在のデフォルト・タイムゾーンを適用します。</span> </p>

<p><span class="merged" id="all.1eJuV3.11"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.QdCum.2"  title="原文: java.util.Date"><code>java.util.Date</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2dO0w.2"  title="原文: java.util.Calendar"><code>java.util.Calendar</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2dJEkq.2"  title="原文: java.time.Instant"><code>java.time.Instant</code></span></p>

</li>
<li>
<p><span class="merged" id="all.Bdz2B.2"  title="原文: java.time.LocalDate"><code>java.time.LocalDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4IHxIV.2"  title="原文: java.time.LocalDateTime"><code>java.time.LocalDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3LnRKw.2"  title="原文: java.time.LocalTime"><code>java.time.LocalTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3AAVu.2"  title="原文: java.time.MonthDay"><code>java.time.MonthDay</code></span></p>

</li>
<li>
<p><span class="merged" id="all.Owl9y.2"  title="原文: java.time.OffsetDateTime"><code>java.time.OffsetDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2MHpVD.2"  title="原文: java.time.OffsetTime"><code>java.time.OffsetTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1pRGcN.2"  title="原文: java.time.Year"><code>java.time.Year</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1ZJKyy.2"  title="原文: java.time.YearMonth"><code>java.time.YearMonth</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2IuHxs.2"  title="原文: java.time.ZonedDateTime"><code>java.time.ZonedDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3IUYDD.2"  title="原文: java.time.chrono.HijrahDate"><code>java.time.chrono.HijrahDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3kNKPI.2"  title="原文: java.time.chrono.JapaneseDate"><code>java.time.chrono.JapaneseDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.kY07a.2"  title="原文: java.time.chrono.MinguoDate"><code>java.time.chrono.MinguoDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1jm4OS.2"  title="原文: java.time.chrono.ThaiBuddhistDate"><code>java.time.chrono.ThaiBuddhistDate</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.2CisNo.12" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38qJHI"  title="原文: @FutureOrPresent"><code>@FutureOrPresent</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Bp4O6.spl1" title="原文 : The annotated element must be an instant, date or time in the present or in the future.">注釈付き要素は、現在または将来のインスタント、日付または時間である必要があります。</span> <span class="merged" id="all.Bp4O6.spl2" title="原文 : Now is defined by the ClockProvider attached to the Validator or ValidatorFactory."><code>Now</code>は、<code>Validator</code>または<code>ValidatorFactory</code>にアタッチされた<code>ClockProvider</code>によって定義されます。</span> <span class="merged" id="all.Bp4O6.spl3" title="原文 : The default clockProvider defines the current time according to the virtual machine, applying the current default time zone if needed.">デフォルトの<code>clockProvider</code>では、仮想マシンに従って現在の時間を定義し、必要に応じて現在のデフォルト・タイムゾーンを適用します。</span> </p>

<p><span class="merged" id="all.1eJuV3.12"  title="原文:: Supported types are:">サポートされているタイプは次のとおりです。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.QdCum.3"  title="原文: java.util.Date"><code>java.util.Date</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2dO0w.3"  title="原文: java.util.Calendar"><code>java.util.Calendar</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2dJEkq.3"  title="原文: java.time.Instant"><code>java.time.Instant</code></span></p>

</li>
<li>
<p><span class="merged" id="all.Bdz2B.3"  title="原文: java.time.LocalDate"><code>java.time.LocalDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4IHxIV.3"  title="原文: java.time.LocalDateTime"><code>java.time.LocalDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3LnRKw.3"  title="原文: java.time.LocalTime"><code>java.time.LocalTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3AAVu.3"  title="原文: java.time.MonthDay"><code>java.time.MonthDay</code></span></p>

</li>
<li>
<p><span class="merged" id="all.Owl9y.3"  title="原文: java.time.OffsetDateTime"><code>java.time.OffsetDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2MHpVD.3"  title="原文: java.time.OffsetTime"><code>java.time.OffsetTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1pRGcN.3"  title="原文: java.time.Year"><code>java.time.Year</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1ZJKyy.3"  title="原文: java.time.YearMonth"><code>java.time.YearMonth</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2IuHxs.3"  title="原文: java.time.ZonedDateTime"><code>java.time.ZonedDateTime</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3IUYDD.3"  title="原文: java.time.chrono.HijrahDate"><code>java.time.chrono.HijrahDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3kNKPI.3"  title="原文: java.time.chrono.JapaneseDate"><code>java.time.chrono.JapaneseDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.kY07a.3"  title="原文: java.time.chrono.MinguoDate"><code>java.time.chrono.MinguoDate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1jm4OS.3"  title="原文: java.time.chrono.ThaiBuddhistDate"><code>java.time.chrono.ThaiBuddhistDate</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.2CisNo.13" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38qJHI.1"  title="原文: @FutureOrPresent"><code>@FutureOrPresent</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2tqEip.spl1" title="原文 : The annotated CharSequence must match the specified regular expression.">注釈付き<code>CharSequence</code>は、指定された正規表現と一致する必要があります。</span> <span class="merged" id="all.2tqEip.spl2" title="原文 : The regular expression follows the Java regular expression conventions see java.util.regex.Pattern.">正規表現は、Javaの正規表現規則に従います。<code>java.util.regex.Pattern</code>を参照してください。</span> <span class="merged" id="all.2tqEip.spl3" title="原文 : Accepts CharSequence."><code>CharSequence</code>を受け入れます。</span> </p>

<p><span class="merged" id="all.2CisNo.14" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.YtioQ"  title="原文: @NotEmpty"><code>@NotEmpty</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Cs5jt.spl1" title="原文 : The annotated element must not be null nor empty.">注釈付き要素は、<code>null</code>にも空にもしないでください。</span> <span class="merged" id="all.4Cs5jt.spl2" title="原文 : Supported types are: * CharSequence - length of character sequence is evaluated * Collection - collection size is evaluated * Map - map size is evaluated * Array (array length is evaluated)">サポートされているタイプ: * <code>CharSequence</code> - 文字シーケンスの長さが評価されます* <code>Collection</code> - コレクションのサイズが評価されます* <code>Map</code> - マップ・サイズは評価されます* <code>Array</code> (配列長は評価されます)</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1qLmwg"  title="原文: @NotBlank"><code>@NotBlank</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2CIwup.spl1" title="原文 : The annotated element must not be null and must contain at least one non-whitespace character.">注釈付き要素は<code>null</code>ではなく、空白以外の文字を少なくとも1つ含める必要があります。</span> <span class="merged" id="all.2CIwup.spl2" title="原文 : Accepts CharSequence."><code>CharSequence</code>を受け入れます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.19Nndy"  title="原文: @Email"><code>@Email</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.IM3Xn.spl1" title="原文 : The string has to be a well-formed email address.">文字列は整形式の電子メール・アドレスである必要があります。</span> <span class="merged" id="all.IM3Xn.spl2" title="原文 : Exact semantics of what makes up a valid email address are left to Jakarta Bean Validation providers.">有効な電子メール・アドレスを構成する内容の厳密なセマンティクスは、Jakarta Beanバリデーション・プロバイダに残ります。</span> <span class="merged" id="all.IM3Xn.spl3" title="原文 : Accepts CharSequence."><code>CharSequence</code>を受け入れます。</span> </p>

<p><span class="merged" id="all.2CisNo.15" title="原文 : Null elements are considered valid."><code>Null</code>要素は有効とみなされます。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1ejBW0" title="原文 : Bean Validation can be configured using META-INF/validation.xml.">Beanバリデーションは、<code>META-INF/validation.xml</code>を使用して構成できます。</span></p>

<p><span class="merged" id="all.xocPn" title="原文 : For more information about configuring the validator factory in validation.xml, see Hibernate Validator Documentation.">validation.xmlでのバリデータ・ファクトリの構成の詳細は、<a href="https://docs.jboss.org/hibernate/stable/validator/reference/en-US/html_single/?v=7.0#chapter-xml-configuration" target="_blank">「Hibernate Validatorのドキュメント」</a>を参照してください。</span></p>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv"  title="原文:: Examples">例</span></h2>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2EVVJu.spl1" title="原文 : The following example shows a simple resource method annotated with @POST whose parameter must be not null and valid.">次の例は、パラメータが<em>「nullでなく」</em>および<em>「有効」</em>である必要がある<code>@POST</code>の注釈が付いた単純なリソース・メソッドを示しています。</span> <span class="merged" id="all.2EVVJu.spl2" title="原文 : Validating a parameter in this case implies making sure that any constraint annotations in the Greeting class are satisfied.">この場合、パラメータを検証することは、<code>Greeting</code>クラスの制約注釈が満たされていることを確認することを意味します。</span> <span class="merged" id="all.2EVVJu.spl3" title="原文 : The resource method shall never be called if the validation fails, with a 400 (Bad Request) status code returned instead.">かわりに400 (Bad Request)ステータス・コードが返されてバリデーションが失敗した場合、リソース・メソッドは呼び出されません。</span> 
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

</li>
<li>
<span class="merged" id="all.17yLNq" title="原文 : The following example shows a simple application with one field declared as not null using @NotNull annotation:">次の例は、<code>@NotNull</code>注釈を使用して<em>「nullでない」</em>として宣言された1つのフィールドを持つ単純なアプリケーションを示しています:</span>
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

</li>
</ol>

<p><span class="merged" id="all.1xa9lI" title="原文 : Examples are available in our official GitHub repository.">例は、<a href="https://github.com/oracle/helidon/tree/4.0.2}/examples/microprofile/bean-validation" target="_blank">「公式のGitHubリポジトリ」</a>にあります。</span></p>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.4ONC1n" title="原文 : Helidon uses Hibernate Bean Validator for general bean validation.">Helidonは、一般的なBeanバリデーションに<a href="https://hibernate.org/validator/" target="_blank">「Hibernate Beanバリデータ」</a>を使用します。</span></p>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.40mXZ5" title="原文 : Bean Validation Specification"><a href="https://jakarta.ee/specifications/bean-validation/3.0/bean-validation_3.0.html}" target="_blank">Beanバリデーション仕様</a></span></p>

</li>
</ul>

</div>

</doc-view>
