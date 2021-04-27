<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1hRQ5W" title="原文 : Serving Static Content">静的コンテンツの提供</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2kgYUo" title="原文 : You can serve static content from a location in a file system or from the classpath.">静的コンテンツは、ファイル・システム内のロケーションまたはクラスパスから提供できます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_serving_static_content"><span class="merged" id="all.1hRQ5W.1" title="原文 : Serving Static Content">静的コンテンツの提供</span></h2>
<div class="section">
<markup
lang="properties"
title="META-INF/microprofile-config.properties - ファイル・システムの静的コンテンツ"
># Location of content on file system
server.static.path.location=/var/www/html
# default is index.html
server.static.path.welcome=resource.html
# static content path - default is "/"
# server.static.path.context=/static-file</markup>

<markup
lang="properties"
title="META-INF/microprofile-config.properties - クラスパスの静的コンテンツ"
># src/main/resources/WEB in your source tree
server.static.classpath.location=/WEB
# default is index.html
server.static.classpath.welcome=resource.html
# static content path - default is "/"
# server.static.classpath.context=/static-cp</markup>

</div>
</doc-view>
