<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_overview"><span class="merged" id="all.YrpRV.2"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2dc3aD.spl1" title="原文 : Helidon MP supports JPA in much the same way that Java EE application servers do, but with much less weight.">Helidon MPは、Java EEアプリケーション・サーバーとほぼ同じ方法でJPAをサポートしますが、重みは大幅に低下します。</span> <span class="merged" id="all.2dc3aD.spl2" title="原文 : If you come from a Java EE background, you&rsquo;ll feel right at home: you work with JPA in Helidon MP in all the ways that you&rsquo;re familiar with.">Java EEのバックグラウンドからアクセスする場合は、すぐに自宅にいるように感じます: 使い慣れたすべての方法で、Helidon MPでJPAを操作します。</span> </p>

<p><span class="merged" id="all.3LTp6f" title="原文 : For example, in Helidon MP&rsquo;s JPA integration, you can work with a fully managed EntityManager by injecting it in the same way you would in a Java EE application server:">たとえば、Helidon MPのJPA統合では、Java EEアプリケーション・サーバーと同じ方法でインジェクトすることで、完全に管理された<code>EntityManager</code>を操作できます:</span></p>

<markup
lang="java"

>@PersistenceContext
private EntityManager em;</markup>

<p><span class="merged" id="all.1iV5pz.spl1" title="原文 : The Jakarta Persistence API is a specification that governs how Java objects map to relational databases, and has existed since 2006.">Jakarta Persistence APIは、Javaオブジェクトのリレーショナル・データベースへのマッピング方法を制御する仕様で、2006年から存在しています。</span> <span class="merged" id="all.1iV5pz.spl2" title="原文 : Hibernate and Eclipselink, two of the most popular JPA implementations, are supported by Helidon MP JPA.">HibernateおよびEclipselink(最も一般的なJPA実装の2つ)は、Helidon MP JPAでサポートされています。</span> </p>

</div>

<h2 id="_next_steps"><span class="merged" id="all.iDczO.5"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<p><span class="merged" id="all.1TZh0C" title="原文 : Learn more about the Java Persistence API (JPA)"><a href="https://jcp.org/en/jsr/detail?id=338" id="" target="_blank" >Java Persistence API (JPA)</a>についてさらに学習します</span></p>

<p><span class="merged" id="all.1jSsYe.spl1" title="原文 : Configure and use the Java Persistence API (JPA) from within a Helidon MP application.">Helidon MPアプリケーション内からJava Persistence API (JPA)を構成および使用します。</span> <span class="merged" id="all.1jSsYe.spl2" title="原文 : Helidon MP JPA Guide."><router-link to="/mp/guides/09_jpa">「Helidon MP JPAガイド」</router-link>。</span> </p>

</div>
</doc-view>
