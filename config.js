// skip 1st line


const {classes: Cc, interfaces: Ci, utils: Cu} = Components;

let Services = globalThis.Services || ChromeUtils.import("resource://gre/modules/Services.jsm").Services;
Cu.import("resource://gre/modules/FileUtils.jsm");
 
var profileDir = Services.dirsvc.get("ProfD", Ci.nsIFile);
var chromeDir = profileDir.clone();
chromeDir.append("chrome");

// If chrome folder isn't there, it's a new profile
if (!chromeDir.exists()) {
  Cu.reportError("chrome folder not found");
  var defaultProfileDir = Services.dirsvc.get("GreD", Ci.nsIFile);
  defaultProfileDir.append("defaults");
  defaultProfileDir.append("profile");
  try {
    Cu.reportError("copying profile folder");
    copyDir(defaultProfileDir, profileDir);
  } catch (e) {
    Cu.reportError(e);
  }
}
  
function copyDir(aOriginal, aDestination) {
  var enumerator = aOriginal.directoryEntries;
  while (enumerator.hasMoreElements()) {
    var file = enumerator.getNext().QueryInterface(Ci.nsIFile);
    if (file.isDirectory()) {
      var subdir = aDestination.clone();
      subdir.append(file.leafName);
      try {
        subdir.create(Ci.nsIFile.DIRECTORY_TYPE, FileUtils.PERMS_DIRECTORY);
        copyDir(file, subdir);
      } catch (e) {
        Cu.reportError(e);
      }
    } else {
      try {
        file.copyTo(aDestination, null);
      } catch (e) {
        Cu.reportError(e);
      }
    }
  }
}



defaultPref("BeautyFox.appearance.IE10", true);
defaultPref("BeautyFox.appearance.IE10ConsumerPreview", false);
defaultPref("BeautyFox.appearance.IE10DeveloperPreview", false);
defaultPref("BeautyFox.appearance.IE10ReleasePreview", false);
defaultPref("BeautyFox.appearance.IE11", true);
defaultPref("BeautyFox.appearance.IE11Win10", false);
defaultPref("BeautyFox.appearance.IE9PreRelease", false);
defaultPref("BeautyFox.appearance.IE9PreRelease7777", false);
defaultPref("BeautyFox.appearance.storedAppearanceChoice", 7);
defaultPref("BeautyFox.option.bDoNotRunWizardInNextStart", true);
defaultPref("BeautyFox.option.bDoNotUseOldSettingsIcon", false);
defaultPref("BeautyFox.option.bFakeDropdownIconsinCommandBar", false);
defaultPref("BeautyFox.option.bHideFakeInnerBorders", false);
defaultPref("BeautyFox.option.bHideSettingsInPopUp", true);
defaultPref("BeautyFox.option.bInetCPL", true);
defaultPref("BeautyFox.option.bShowDownloadProgress", false);
defaultPref("BeautyFox.option.bShowStatusBar", false);
defaultPref("BeautyFox.option.bTabsOnNavRow", true);
defaultPref("BeautyFox.option.commandBar", false);
defaultPref("BeautyFox.option.iForceAeroSupport", true);
defaultPref("BeautyFox.option.iNavigationButtonsRadius", 50);
defaultPref("BeautyFox.option.storedBookmarItemTitleWidthChoice", 0);
defaultPref("BeautyFox.option.storedCustomColourMethodForUIChoice", 0);
defaultPref("BeautyFox.option.storedCustomiseCommandBarItemsChoice", 1);
defaultPref("BeautyFox.option.storedEdgeButtonChoice", 0);
defaultPref("BeautyFox.option.storedExtensionsButtonChoice", 0);
defaultPref("BeautyFox.option.storedFakeInternetProtectedLabelChoice", 0);
defaultPref("browser.bookmarks.restore_default_bookmarks", false);
defaultPref("browser.display.windows.non_native_menus", 0);
defaultPref("browser.download.always_ask_before_handling_new_types", true);
defaultPref("browser.download.viewableInternally.typeWasRegistered.avif", true);
defaultPref("browser.download.viewableInternally.typeWasRegistered.webp", true);
defaultPref("browser.privacySegmentation.createdShortcut", true);
defaultPref("browser.tabs.inTitlebar", 1);
defaultPref("browser.tabs.tabmanager.enabled", false);
defaultPref("browser.taskbar.previews.enable", true);
defaultPref("browser.theme.content-theme", 1);
defaultPref("browser.theme.dark-private-windows", false);
defaultPref("browser.toolbars.bookmarks.visibility", "never");
defaultPref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"unified-extensions-area\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"urlbar-container\",\"stop-reload-button\",\"bookmarks-button\",\"unified-extensions-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[\"addToBookmarksBarButton\",\"suggestedsites_bruni_com-browser-action\",\"personal-bookmarks\"],\"endToolbar\":[\"home-button\",\"bookmarksSidebarButton\",\"IEMenuButton\",\"feedbackButton\"],\"commandBar\":[\"cBHomeButton\",\"cBPrintButton\",\"cBReadMailButton\",\"downloads-button\",\"cBPageMenuButton\",\"cBSafetyMenuButton\",\"cBToolsMenuButton\",\"cBHelpMenuButton\"],\"addonsBar\":[\"_799c0914-748b-41df-a25c-22d008f9e83f_-browser-action\",\"ublock0_raymondhill_net-browser-action\",\"zoomMenuButton\"]},\"seen\":[\"save-to-pocket-button\",\"feedbackButton\",\"bookmarksSidebarButton\",\"addToBookmarksBarButton\",\"cBHomeButton\",\"cBPrintButton\",\"cBReadMailButton\",\"developer-button\"],\"dirtyAreaCache\":[\"nav-bar\",\"endToolbar\",\"TabsToolbar\",\"toolbar-menubar\",\"PersonalToolbar\",\"commandBar\",\"addonsBar\",\"unified-extensions-area\"],\"currentVersion\":19,\"newElementCount\":62}");
defaultPref("browser.urlbar.placeholderName", "Google");
defaultPref("browser.urlbar.quicksuggest.migrationVersion", 2);
defaultPref("browser.urlbar.quicksuggest.scenario", "history");
defaultPref("gecko.handlerService.defaultHandlersVersion", 1);
defaultPref("nglayout.enable_drag_image", false);
defaultPref("nimbus.syncdefaultsstore.upgradeDialog", "{\"slug\":\"upgrade-spotlight-rollout\",\"branch\":{\"slug\":\"treatment\",\"ratio\":1,\"feature\":{\"value\":null,\"enabled\":true,\"featureId\":\"upgradeDialog\"},\"features\":null},\"active\":true,\"enrollmentId\":\"0c5bff4d-270a-4f9a-9e5d-d5727927d5cd\",\"experimentType\":\"rollout\",\"source\":\"rs-loader\",\"userFacingName\":\"Upgrade Spotlight Rollout\",\"userFacingDescription\":\"Experimenting on onboarding content when you upgrade Firefox.\",\"lastSeen\":\"2024-04-17T07:13:09.102Z\",\"featureIds\":[\"upgradeDialog\"],\"defaultPrefs\":[],\"isRollout\":true}");
defaultPref("nimbus.syncdefaultsstore.upgradeDialog.enabled", false);
defaultPref("pdfjs.enabledCache.state", true);
defaultPref("pdfjs.migrationVersion", 2);
defaultPref("privacy.sanitize.pending", "[{\"id\":\"newtab-container\",\"itemsToClear\":[],\"options\":{}}]");
defaultPref("security.dialog_enable_delay", 0);
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
defaultPref("ui.osk.debug.keyboardDisplayReason", "IKPOS: Touch screen not found.");
defaultPref("userChromeJS.enabled", true);
defaultPref("userChromeJS.firstRunShown", true);
defaultPref("userChromeJS.gBrowser_hack.enabled", false);
defaultPref("userChromeJS.scriptsDisabled", "");
defaultPref("widget.ev-native-controls-patch.override-win-version", 7);



defaultPref("app.normandy.api_url", "");
defaultPref("app.normandy.enabled", false);
defaultPref("app.shield.optoutstudies.enabled", false);
defaultPref("app.update.auto", false);
defaultPref("beacon.enabled", false);
defaultPref("breakpad.reportURL", "");
defaultPref("browser.aboutConfig.showWarning", false);
defaultPref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
defaultPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
defaultPref("browser.crashReports.unsubmittedCheck.enabled", false);
defaultPref("browser.disableResetPrompt", true);
defaultPref("browser.newtab.preload", false);
defaultPref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
defaultPref("browser.newtabpage.enabled", false);
defaultPref("browser.newtabpage.enhanced", false);
defaultPref("browser.newtabpage.introShown", true);
defaultPref("browser.safebrowsing.appRepURL", "");
defaultPref("browser.safebrowsing.blockedURIs.enabled", false);
defaultPref("browser.safebrowsing.downloads.enabled", false);
defaultPref("browser.safebrowsing.downloads.remote.enabled", false);
defaultPref("browser.safebrowsing.downloads.remote.url", "");
defaultPref("browser.safebrowsing.enabled", false);
defaultPref("browser.safebrowsing.malware.enabled", false);
defaultPref("browser.safebrowsing.phishing.enabled", false);
defaultPref("browser.selfsupport.url", "");
defaultPref("browser.send_pings", false);
defaultPref("browser.sessionstore.privacy_level", 0);
defaultPref("browser.shell.checkDefaultBrowser", false);
defaultPref("browser.startup.homepage_override.mstone", "ignore");
defaultPref("browser.tabs.crashReporting.sendReport", false);
defaultPref("browser.urlbar.groupLabels.enabled", false);
defaultPref("browser.urlbar.quicksuggest.enabled", false);
defaultPref("datareporting.healthreport.service.enabled", false);
defaultPref("datareporting.healthreport.uploadEnabled", false);
defaultPref("datareporting.policy.dataSubmissionEnabled", false);
defaultPref("device.sensors.ambientLight.enabled", false);
defaultPref("device.sensors.enabled", false);
defaultPref("device.sensors.motion.enabled", false);
defaultPref("device.sensors.orientation.enabled", false);
defaultPref("device.sensors.proximity.enabled", false);
defaultPref("dom.battery.enabled", false);
defaultPref("experiments.activeExperiment", false);
defaultPref("experiments.enabled", false);
defaultPref("experiments.manifest.uri", "");
defaultPref("experiments.supported", false);
defaultPref("extensions.getAddons.cache.enabled", false);
defaultPref("extensions.getAddons.showPane", false);
defaultPref("extensions.pocket.enabled", false);
defaultPref("extensions.shield-recipe-client.api_url", "");
defaultPref("extensions.shield-recipe-client.enabled", false);
defaultPref("extensions.webservice.discoverURL", "");
defaultPref("media.autoplay.default", 0);
defaultPref("media.autoplay.enabled", true);
defaultPref("media.video_stats.enabled", false);
defaultPref("network.allow-experiments", false);
defaultPref("network.cookie.cookieBehavior", 1);
defaultPref("network.http.referer.spoofSource", true);
defaultPref("network.trr.mode", 5);
defaultPref("privacy.query_stripping", true);
defaultPref("privacy.trackingprotection.cryptomining.enabled", true);
defaultPref("privacy.trackingprotection.enabled", true);
defaultPref("privacy.trackingprotection.fingerprinting.enabled", true);
defaultPref("privacy.trackingprotection.pbmode.enabled", true);
defaultPref("security.ssl.disable_session_identifiers", true);
defaultPref("services.sync.defaultPrefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSite", false);
defaultPref("toolkit.telemetry.archive.enabled", false);
defaultPref("toolkit.telemetry.bhrPing.enabled", false);
defaultPref("toolkit.telemetry.cachedClientID", "");
defaultPref("toolkit.telemetry.enabled", false);
defaultPref("toolkit.telemetry.firstShutdownPing.enabled", false);
defaultPref("toolkit.telemetry.hybridContent.enabled", false);
defaultPref("toolkit.telemetry.newProfilePing.enabled", false);
defaultPref("toolkit.telemetry.prompted", 2);
defaultPref("toolkit.telemetry.rejected", true);
defaultPref("toolkit.telemetry.reportingpolicy.firstRun", false);
defaultPref("toolkit.telemetry.server", "");
defaultPref("toolkit.telemetry.shutdownPingSender.enabled", false);
defaultPref("toolkit.telemetry.unified", false);
defaultPref("toolkit.telemetry.unifiedIsOptIn", false);
defaultPref("toolkit.telemetry.updatePing.enabled", false);

defaultPref("gfx.webrender.software", true);


try {
    
  let cmanifest = Cc['@mozilla.org/file/directory_service;1'].getService(Ci.nsIProperties).get('UChrm', Ci.nsIFile);
  cmanifest.append('utils');
  cmanifest.append('chrome.manifest');
  
  if(cmanifest.exists()){
    Components.manager.QueryInterface(Ci.nsIComponentRegistrar).autoRegister(cmanifest);
    ChromeUtils.importESModule('chrome://userchromejs/content/boot.sys.mjs');
  }
} catch(ex) {};