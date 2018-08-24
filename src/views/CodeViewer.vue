<template>
  <div class="flx-layout md-layout md-gutter">
    <div class="md-layout-item md-size-25">
      <RecentUpload></RecentUpload>
    </div>
    <div class="md-layout-item md-size-75">
      <div class="flx-layout code-editor-section">
        <div class="md-layout-item md-size-60">
          <p class="md-headline">This is the title of the file</p>
          <span class="md-body-1">Topic name</span><span class="md-body-1">Date modified</span>
        </div>
        <div class="md-layout-item md-size-40 text-right">
          <md-button class="md-raised">
            <md-icon>share</md-icon>
            Share
          </md-button>
          <md-button class="md-raised">
            <md-icon>edit</md-icon>
            Edit
          </md-button>
        </div>
      </div>
      <md-divider></md-divider>
      <p class="md-title">Description</p>
      <p>
        This documentation is designed for people familiar with JavaScript programming and object-oriented programming
        concepts. You should also be familiar with Google Maps from a user's point of view. There are many JavaScript
        tutorials available on the Web.
      </p>
      <p>This conceptual documentation is designed to let you quickly start exploring and developing applications with
        the Maps JavaScript API. We also publish the Maps JavaScript API Reference.</p>

      <div class="code-viewpane">
        <md-button class="md-icon-button md-primary">
          <md-icon>file_copy</md-icon>
        </md-button>
        <pre>
          package com.wrinkleit.ecommerce.controller.common;

          import java.net.URISyntaxException;
          import java.nio.charset.Charset;
          import java.util.List;

          import org.apache.commons.collections.CollectionUtils;
          import org.apache.http.NameValuePair;
          import org.apache.http.client.utils.URLEncodedUtils;
          import org.springframework.beans.factory.annotation.Value;
          import org.springframework.boot.autoconfigure.web.ErrorController;
          import org.springframework.stereotype.Controller;
          import org.springframework.ui.Model;
          import org.springframework.web.bind.annotation.RequestMapping;
          import org.springframework.web.bind.annotation.RequestMethod;
          import org.springframework.web.bind.annotation.RequestParam;


          @Controller
          public class IndexController implements ErrorController {
          private static final String PATH = "/error";

          @Value("${ecom.google.api.key}") String googleMapApiKey;

          @RequestMapping(value = PATH)
          public String error() {
          return "/layout/wrinkleit/error";
          }

          @Override
          public String getErrorPath() {
          return PATH;
          }
          @RequestMapping(value="/downloadapp",method=RequestMethod.GET)
          public String downloadApp(Model model,@RequestParam(value="ads",required=true) String googleQueryParam) throws URISyntaxException {
          String androidUrl = "market://details?id=com.wrinkleit.ecommerce.android&hl=en";
          String iosUrl = "https://click.google-analytics.com/redirect?";
          iosUrl += "tid="+googleMapApiKey;
          iosUrl += "&url=https://itunes.apple.com/us/app/grabcery/id1330639578?ls=1&mt=8";
          iosUrl += "&aid=com.wrinkleit.grabcery";
          iosUrl += "&idfa={ADID}";

          if(!CollectionUtils.isEmpty(parse)) {
          for (NameValuePair param : parse) {
          switch (param.getName()) {
          case "campaign":
          androidUrl += "&utm_campaign=" + param.getValue();
          iosUrl += "&cn=" + param.getValue();
          break;
          case "content":
          androidUrl += "&utm_content=" + param.getValue();
          iosUrl += "&cc=" + param.getValue();
          break;
          case "keyword":
          androidUrl += "&utm_term="+param.getValue();
          iosUrl += "&ck="+param.getValue();
          break;
          case "medium":
          androidUrl += "&utm_medium=" +param.getValue();
          iosUrl += "&cm="+param.getValue();
          break;
          case "source":
          androidUrl += "&utm_source="+param.getValue();
          iosUrl += "&cs="+param.getValue();
          break;
          case "term":
          androidUrl += "&utm_term=" + param.getValue();
          iosUrl += "&ck="+param.getValue();
          break;
          default:
          androidUrl += "&"+ param.getName() + param.getValue();
          iosUrl += "&"+ param.getName() +param.getValue();
          break;
          }
          }
          }
          androidUrl += "&anid=admob";

          model.addAttribute("playStoreLink", androidUrl);
          model.addAttribute("appStoreLink", iosUrl);

          return "/layout/wrinkleit/RedirectMobileView";
          }
          }
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  import RecentUpload from '@/components/RecentUpload.vue'
  export default {
    name: "code-viewer",
    components:{
      RecentUpload
    }
  }
</script>

<style scoped>

</style>