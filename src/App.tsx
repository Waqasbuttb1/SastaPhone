import { useState } from 'react';
import { Copy, Check, ExternalLink, Download, Search, Menu, X } from 'lucide-react';

interface IntentLink {
  name: string;
  icon: string;
  url: string;
}

interface DownloadLink {
  name: string;
  primary: string;
  backup: string;
}

const App = () => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const intentLinks: IntentLink[] = [
    {
      name: 'Galaxy Store',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/galaxy-store.png',
      url: 'intent://com.sec.android.app.samsungapps/#Intent;scheme=android-app;end'
    },
    {
      name: 'Google Quick Search Box',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/google-search.png',
      url: 'intent://com.google.android.googlequicksearchbox/#Intent;scheme=android-app;end'
    },
    {
      name: 'Settings',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/settings.png',
      url: 'intent://com.android.settings/#Intent;scheme=android-app;end'
    },
    {
      name: 'Screen Smartlock',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/screen-smartlock.png',
      url: 'intent://com.google.android.gms/#Intent;scheme=promote_smartlock_scheme;end'
    },
    {
      name: 'Samsung My Files',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/samsung-my-file.png',
      url: 'intent://com.sec.android.app.myfiles/#Intent;scheme=android-app;end'
    },
    {
      name: 'Huawei Files',
      icon: '/Huaweifiles.png',
      url: 'intent://com.huawei.hidisk/#Intent;scheme=android-app;end'
    },
    {
      name: 'Oppo Phone Clone',
      icon: '/clone.png',
      url: 'intent://com.coloros.backuprestore/#Intent;scheme=android-app;end'
    },
    {
      name: 'Infinix XShare',
      icon: '/xshare.png',
      url: 'intent://com.infinix.xshare/#Intent;scheme=android-app;end'
    },
    {
      name: 'Vivo EasyShare',
      icon: '/Easyshare.png',
      url: 'intent://com.vivo.easyshare/#Intent;scheme=android-app;end'
    },
    {
      name: 'FRP Bypass App',
      icon: '/frp-bypass-apk-featured-image.png',
      url: 'intent://com.rootjunky.frpbypass/#Intent;scheme=android-app;end'
    },
    {
      name: 'Youtube',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/youtube.png',
      url: 'intent://com.google.android.youtube/#Intent;scheme=android-app;end'
    },
    {
      name: 'Chrome',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/chrome.png',
      url: 'intent://com.android.chrome/#Intent;scheme=android-app;end'
    },
    {
      name: 'Alliance Shield',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/alliance-shield.png',
      url: 'intent://com.rrivenllc.shieldx/#Intent;scheme=android-app;end'
    },
    {
      name: 'Android Hidden Settings',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/android-hidden-settings.png',
      url: 'https://galaxy.store/setting'
    },
    {
      name: 'Login Account',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/google-search.png',
      url: 'intent://com.google.android.gsf.login.LoginActivity/#Intent;scheme=android-app;end'
    },
    {
      name: 'Home Launcher',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/home-launcher.png',
      url: 'intent://com.sec.android.app.launcher/#Intent;scheme=android-app;end'
    },
    {
      name: 'Alliance Shield On Galaxy Store',
      icon: 'https://addrom.com/wp-content/uploads/2021/10/alliance-shield.png',
      url: 'https://galaxystore.samsung.com/detail/com.rrivenllc.shieldx?session_id=W_0a719781bf2f739158262639f4c63d35'
    },
    {
      name: 'Nova Launcher',
      icon: 'nova.png',
      url: 'intent://com.teslacoilsw.launcher/#Intent;scheme=android-app;end'
    },
    {
      name: 'Package Disabler Pro',
      icon: 'pdpro.png',
      url: 'intent://iotapps.tabs.com.iotapplication/#Intent;scheme=android-app;end'
    },
    {
      name: 'Notification Bar',
      icon: 'nb.png',
      url: 'intent://com.treydev.ons/#Intent;scheme=android-app;end'
    },
    {
      name: 'Apex Launcher',
      icon: 'apex.png',
      url: 'intent://com.anddoes.launcher/#Intent;scheme=android-app;end'
    },
    {
      name: 'QuickShortcut Maker',
      icon: 'qsm.png',
      url: 'intent://com.sika524.android.quickshortcut/#Intent;scheme=android-app;end'
    },
    {
      name: 'ADB',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/adb.png',
      url: 'intent://com.sec.android.app.modemui.activities.USB.settings/#Intent;scheme=android-app;end'
    },
    {
      name: 'USB Setting',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/usb-setting.png',
      url: 'intent://com.sec.android.app.servicemodeapp/#Intent;scheme=promote_USBSettings_scheme;end'
    },
    {
      name: '*#0*#',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/dialer-call.png',
      url: 'tel: *#0*#/#Intent;scheme=android-app;end'
    },
    {
      name: 'Google Maps',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/google-map.png',
      url: 'intent://com.google.android.apps.maps/#Intent;scheme=android-app;end'
    },
    {
      name: 'Google Assistant',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/google-assistant.png',
      url: 'intent://com.google.android.apps.googleassistant/#Intent;scheme=android-app;end'
    },
    {
      name: 'Gmail',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/gmail.png',
      url: 'intent://com.google.android.gm/#Intent;scheme=android-app;end'
    },
    {
      name: 'S9 Launcher',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/s9-launcher.png',
      url: 'https://galaxystore.samsung.com/detail/com.s9launcher.dir.launcher'
    },
    {
      name: 'Samsung Touch ID',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/touch-id.png',
      url: 'intent://com.android.settings/com.samsung.android.settings.biometrics.fingerprint.FingerprintEntry/#Intent;scheme=android-app;end'
    },
    {
      name: 'Samsung Secure Folder',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/secure-folder.png',
      url: 'intent://com.samsung.knox.securefolder/#Intent;scheme=android-app;end'
    },
    {
      name: 'Smart Switch App',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/smart-switch.png',
      url: 'intent://com.sec.android.easyMover/#Intent;scheme=android-app;end'
    },
    {
      name: 'Samsung Dialer Call',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/dialer-call.png',
      url: 'intent://com.samsung.android.dialer/#Intent;scheme=android-app;end'
    },
    {
      name: 'Mi File Manager',
      icon: 'https://vnrom.net/wp-content/uploads/2022/07/mi-file-manager.png',
      url: 'intent://com.mi.android.globalFileexplorer/#Intent;scheme=android-app;end'
    }
  ];

  const downloadLinks: DownloadLink[] = [
    {
      name: 'Alliance Shield.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Alliance_Shield.apk',
      backup: 'https://dl.ondex.app/Alliance_Shield.apk'
    },
    {
      name: 'Complete Bypass 5.0 & 6.0',
      primary: 'http://www.mediafire.com/file/1s7j6c882pbp8cy/MSA_FRP_Bypass_by_texel.apk/file',
      backup: 'https://www.mediafire.com/file/1s7j6c882pbp8cy/MSA+FRP+Bypass+by+texel.apk'
    },
    {
      name: 'Android 5 GAM.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Android_5_GAM.apk',
      backup: 'https://dl.ondex.app/Android_5_GAM.apk'
    },
    {
      name: 'Android 6 GAM.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Android_6_GAM.apk',
      backup: 'https://dl.ondex.app/Android_6_GAM.apk'
    },
    {
      name: 'Tecnocare Tricks For Android 7.apk',
      primary: 'http://www.mediafire.com/file/hwasz7ptiu0if79/technocare_by_all_mobile_softwear_solutions.apk/file',
      backup: 'https://www.mediafire.com/file/hwasz7ptiu0if79/technocare_by_all_mobile_softwear_solutions.apk/file'
    },
    {
      name: 'Android 8-9-10 GAM.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Android_8-9-10_GAM.apk',
      backup: 'https://dl.ondex.app/Android_8-9-10_GAM.apk'
    },
    {
      name: 'Google Setting.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Google_Setting.apk',
      backup: 'https://dl.ondex.app/Google_Setting.apk'
    },
    {
      name: 'FRP Bypass.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/FRP_Bypass.apk',
      backup: 'https://dl.ondex.app/FRP_Bypass.apk'
    },
    {
      name: 'FRP Android 7.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/FRP_Android_7.apk',
      backup: 'https://dl.ondex.app/FRP_Android_7.apk'
    },
    {
      name: 'FRP addROM.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/FRP_addROM.apk',
      backup: 'https://dl.ondex.app/FRP_addROM.apk'
    },
    {
      name: 'Test DPC.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Test_DPC.apk',
      backup: 'https://dl.ondex.app/Test_DPC.apk'
    },
    {
      name: 'QuickShortcutMaker.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/QuickShortcutMaker.apk',
      backup: 'https://dl.ondex.app/QuickShortcutMaker.apk'
    },
    {
      name: 'Apex Launcher.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Apex_Launcher.apk',
      backup: 'https://dl.ondex.app/Apex_Launcher.apk'
    },
    {
      name: 'Nova Launcher.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Nova_Launcher.apk',
      backup: 'https://dl.ondex.app/Nova_Launcher.apk'
    },
    {
      name: 'Menu Button.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Menu_Button.apk',
      backup: 'https://dl.ondex.app/Menu_Button.apk'
    },
    {
      name: 'ES File Explorer.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/ES_File_Explorer.apk',
      backup: 'https://dl.ondex.app/ES_File_Explorer.apk'
    },
    {
      name: 'Setting.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Setting.apk',
      backup: 'https://dl.ondex.app/Setting.apk'
    },
    {
      name: 'Development Settings.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Development_Settings.apk',
      backup: 'https://dl.ondex.app/Development_Settings.apk'
    },
    {
      name: 'HushSMS.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/HushSMS.apk',
      backup: 'https://dl.ondex.app/HushSMS.apk'
    },
    {
      name: 'Phone Clone.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Phone_Clone.apk',
      backup: 'https://dl.ondex.app/Phone_Clone.apk'
    },
    {
      name: 'File Commander Manager.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/File_Commander_Manager.apk',
      backup: 'https://dl.ondex.app/File_Commander_Manager.apk'
    },
    {
      name: 'Smart Switch Mobile.apk',
      primary: 'https://github.com/addrom/bypass/raw/master/Smart_Switch_Mobile.apk',
      backup: 'https://dl.ondex.app/Smart_Switch_Mobile.apk'
    }
  ];

  const samsungAccountRemovalApks: DownloadLink[] = [
    {
      name: 'PDP Engine V1',
      primary: 'https://www.mediafire.com/file/knmgo5utbb2q9r3/eu.airwatch.mdm_2017-10-19.apk/file',
      backup: 'https://www.mediafire.com/file/knmgo5utbb2q9r3/eu.airwatch.mdm_2017-10-19.apk/file'
    },
    {
      name: 'Package Disabler Pro',
      primary: 'https://www.mediafire.com/file/2u2i94a8bjskiw4/com.ospolice.packagedisablerpro_9.8_free-www.apkhere.com.apk/file',
      backup: 'https://www.mediafire.com/file/2u2i94a8bjskiw4/com.ospolice.packagedisablerpro_9.8_free-www.apkhere.com.apk/file'
    }
  ];

  const filteredIntentLinks = intentLinks.filter(link =>
    link.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDownloadLinks = downloadLinks.filter(link =>
    link.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <h1 className="text-xl font-bold text-white">Waqas FRP</h1>
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-blue-500/20 bg-slate-950/95 px-4 py-4">
            <div className="flex gap-6 justify-center">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            FRP Unlock Apps & Necessary Links
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Complete collection of FRP bypass tools, intent links, and necessary applications
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search apps, tools, or files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-blue-500/30 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>

        {/* Intent Links Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-blue-400" />
            Quick Access Intent Links
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredIntentLinks.map((link, index) => (
              <div
                key={index}
                className="group bg-slate-900/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/40/1e293b/3b82f6?text=APP';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium text-sm mb-2 line-clamp-2">{link.name}</h4>
                    <div className="flex gap-2">
                      <a
                        href={link.url}
                        className="flex-1 text-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md transition-colors"
                      >
                        Open
                      </a>
                      <button
                        onClick={() => copyToClipboard(link.url)}
                        className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors"
                        title="Copy link"
                      >
                        {copiedUrl === link.url ? (
                          <Check className="w-3.5 h-3.5 text-green-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Links Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Download className="w-6 h-6 text-blue-400" />
            FRP Bypass APK Files
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredDownloadLinks.map((link, index) => (
              <div
                key={index}
                className="bg-slate-900/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-300"
              >
                <h4 className="text-white font-medium mb-3">{link.name}</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={link.primary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors text-center"
                  >
                    Download
                  </a>
                  <a
                    href={link.backup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors text-center"
                  >
                    Backup Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Samsung Account Removal Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Download className="w-6 h-6 text-blue-400" />
            Samsung Account Removal APKs
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {samsungAccountRemovalApks.map((link, index) => (
              <div
                key={index}
                className="bg-slate-900/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-300"
              >
                <h4 className="text-white font-medium mb-3">{link.name}</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={link.primary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors text-center"
                  >
                    Download
                  </a>
                  <a
                    href={link.backup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors text-center"
                  >
                    Backup Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-blue-500/20 pt-12 pb-8">
          <div className="text-center">
            <p className="text-2xl text-blue-200 mb-6 font-arabic">وَتُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ</p>
            <p className="text-xl font-semibold text-white mb-4">Waqas Butt</p>
            <img
              src="https://unremitted-dopes.000webhostapp.com/waqas.jpg"
              alt="Waqas Butt"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500/30"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <p className="text-blue-300/60 text-sm mt-8">
              © 2024 Waqas FRP. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {copiedUrl && (
        <div className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in z-50">
          <Check className="w-5 h-5" />
          <span>Link copied to clipboard!</span>
        </div>
      )}
    </div>
  );
};

export default App;
