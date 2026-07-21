var saludo = "Hola mundo";
console.log(saludo);
console.log(global);

console.log(process);


var Libertad - Caos 

let por bloque 

for (let i=0; i<10; i++){
  let por bloque = 1;
  console.log(por bloque)
}

if(true){
  let por bloque = 2;
  console.log(por bloque)
}

function otroBloque(){
  let por bloque = 3;
  console.log(por bloque)
}

const INVARIABLE  

const edad = 4
edad = 5


const list = [1,2,3,4,5]
list[0] = 100

const obj = {nombre: "Juan", edad: 30}
obj.nombre = "Pedro"
obj.edad = 40

obj = {} 

// Var Var - Constantes - {} - [] - func ->>>>>> CONST 

const papa = function(){
  console.log("Soy papa")
}

const PORT = 3000 

const products = [
  {id: 1, name: "Product 1", price: 100},
  {id: 2, name: "Product 2", price: 200},
  {id: 3, name: "Product 3", price: 300},
]

const product = {
    id: 1,
    name: "Product 1",
    price: 100,
    getPrice: function(IN){  // METODO o FUNCTION
        return this.price  OUT
    }
}

var let 

/*

server {}

listen {}

process {}

node global {}

node tiene muchos MODULOS o LIBRERIAS NATIVAS 

fs{
writeFileSync
readFileSync
unlinkSync


}  http{}  path{}  os{}  crypto{}  util{}  events{}  stream{}  buffer{}  child_process{}  cluster{}  dgram{}  dns{}  domain{}  net{}  repl{}  tls{}  v8{}


fs.writeFileSync("archivo.txt", "Hola mundo")

fs.readFileSync("archivo.txt", "utf-8")

fs.unlinkSync("archivo.txt")

http.createServer((req, res) => {})



[global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}







process {
  version: 'v24.8.0',
  versions: {
    node: '24.8.0',
    acorn: '8.15.0',
    ada: '3.2.7',
    amaro: '1.1.2',
    ares: '1.34.5',
    brotli: '1.1.0',
    cjs_module_lexer: '2.1.0',
    cldr: '47.0',
    icu: '77.1',
    llhttp: '9.3.0',
    modules: '137',
    napi: '10',
    nbytes: '0.1.1',
    ncrypto: '0.0.1',
    nghttp2: '1.66.0',
    openssl: '3.5.2',
    simdjson: '3.13.0',
    simdutf: '6.4.0',
    sqlite: '3.50.4',
    tz: '2025b',
    undici: '7.14.0',
    unicode: '16.0',
    uv: '1.51.0',
    uvwasi: '0.0.23',
    v8: '13.6.233.10-node.27',
    zlib: '1.3.1-470d3a2',
    zstd: '1.5.7'
  },
  arch: 'x64',
  platform: 'win32',
  release: {
    name: 'node',
    sourceUrl: 'https://nodejs.org/download/release/v24.8.0/node-v24.8.0.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v24.8.0/node-v24.8.0-headers.tar.gz',
    libUrl: 'https://nodejs.org/download/release/v24.8.0/win-x64/node.lib'
  },
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [
    'Internal Binding builtins',
    'Internal Binding module_wrap',
    'Internal Binding errors',
    'NativeModule internal/assert',
    'Internal Binding util',
    'NativeModule internal/errors',
    'Internal Binding config',
    'Internal Binding timers',
    'Internal Binding async_wrap',
    'Internal Binding task_queue',
    'Internal Binding symbols',
    'NativeModule internal/async_hooks',
    'Internal Binding constants',
    'Internal Binding types',
    'Internal Binding options',
    'NativeModule internal/options',
    'Internal Binding string_decoder',
    'NativeModule internal/util',
    'NativeModule internal/util/types',
    'NativeModule internal/validators',
    'NativeModule internal/linkedlist',
    'NativeModule internal/priority_queue',
    'Internal Binding icu',
    'NativeModule internal/util/inspect',
    'NativeModule internal/constants',
    'Internal Binding trace_events',
    'NativeModule internal/util/debuglog',
    'Internal Binding async_context_frame',
    'NativeModule internal/async_context_frame',
    'NativeModule internal/timers',
    'NativeModule internal/events/abort_listener',
    'NativeModule events',
    'Internal Binding buffer',
    'Internal Binding mksnapshot',
    'NativeModule internal/v8/startup_snapshot',
    'NativeModule internal/buffer',
    'NativeModule buffer',
    'NativeModule internal/webidl',
    'Internal Binding messaging',
    'NativeModule internal/worker/js_transferable',
    'NativeModule diagnostics_channel',
    'Internal Binding process_methods',
    'NativeModule internal/process/per_thread',
    'Internal Binding credentials',
    'NativeModule internal/process/promises',
    'NativeModule internal/fixed_queue',
    'NativeModule async_hooks',
    'NativeModule internal/process/task_queues',
    'NativeModule timers',
    'NativeModule path',
    'Internal Binding url_pattern',
    'NativeModule internal/querystring',
    'NativeModule internal/mime',
    'NativeModule internal/data_url',
    'NativeModule querystring',
    'Internal Binding url',
    'NativeModule internal/url',
    'Internal Binding modules',
    'NativeModule internal/modules/typescript',
    'Internal Binding contextify',
    'NativeModule internal/vm',
    'NativeModule internal/process/execution',
    'NativeModule internal/process/warning',
    'NativeModule internal/source_map/source_map_cache',
    'Internal Binding fs',
    'Internal Binding blob',
    'Internal Binding encoding_binding',
    'NativeModule internal/encoding',
    'NativeModule internal/blob',
    'NativeModule internal/fs/utils',
    'Internal Binding permission',
    'NativeModule internal/process/permission',
    'NativeModule fs',
    'NativeModule internal/modules/helpers',
    'NativeModule internal/console/constructor',
    'NativeModule internal/console/global',
    'NativeModule internal/util/inspector',
    'Internal Binding inspector',
    'NativeModule internal/streams/utils',
    'NativeModule util',
    'Internal Binding performance',
    'NativeModule internal/perf/utils',
    'NativeModule internal/event_target',
    'Internal Binding wasm_web_api',
    'NativeModule internal/process/signal',
    'NativeModule url',
    'NativeModule internal/modules/customization_hooks',
    'NativeModule internal/modules/package_json_reader',
    'NativeModule internal/modules/cjs/loader',
    'NativeModule internal/process/pre_execution',
    'NativeModule internal/modules/esm/utils',
    'NativeModule internal/inspector_async_hook',
    'Internal Binding worker',
    'NativeModule internal/modules/run_main',
    'NativeModule internal/net',
    'NativeModule internal/dns/utils',
    'NativeModule vm',
    'NativeModule internal/abort_controller',
    'NativeModule internal/streams/end-of-stream',
    'NativeModule internal/streams/destroy',
    ... 32 more items
  ],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype] {
    newListener: [ [Function (anonymous)], [Function: startListeningIfSignal] ],
    removeListener: [ [Function (anonymous)], [Function: stopListeningIfSignal] ],
    warning: [Function: onWarning],
    SIGWINCH: [
      [Function: refreshStdoutOnSigWinch],
      [Function: refreshStderrOnSigWinch]
    ]
  },
  _eventsCount: 4,
  _maxListeners: undefined,
  domain: null,
  _exiting: [Getter/Setter],
  exitCode: [Getter/Setter],
  config: {
    target_defaults: {
      cflags: [],
      configurations: [Object],
      default_configuration: 'Release',
      defines: [Array],
      include_dirs: [],
      libraries: []
    },
    variables: {
      asan: 0,
      clang: 1,
      control_flow_guard: false,
      coverage: false,
      dcheck_always_on: 0,
      debug_nghttp2: false,
      debug_node: false,
      enable_lto: false,
      enable_pgo_generate: false,
      enable_pgo_use: false,
      error_on_warn: false,
      force_dynamic_crt: 0,
      host_arch: 'x64',
      icu_data_in: '..\\..\\deps\\icu-tmp\\icudt77l.dat',
      icu_endianness: 'l',
      icu_gyp_path: 'tools/icu/icu-generic.gyp',
      icu_path: 'deps/icu-small',
      icu_small: false,
      icu_ver_major: '77',
      libdir: 'lib',
      llvm_version: '19.1.5',
      napi_build_version: '10',
      nasm_version: '2.16',
      node_builtin_shareable_builtins: [Array],
      node_byteorder: 'little',
      node_cctest_sources: [Array],
      node_debug_lib: false,
      node_enable_d8: false,
      node_enable_v8_vtunejit: false,
      node_enable_v8windbg: false,
      node_fipsinstall: false,
      node_install_corepack: true,
      node_install_npm: true,
      node_library_files: [Array],
      node_module_version: 137,
      node_no_browser_globals: false,
      node_prefix: '\\usr\\local',
      node_quic: false,
      node_release_urlbase: 'https://nodejs.org/download/release/',
      node_shared: false,
      node_shared_ada: false,
      node_shared_brotli: false,
      node_shared_cares: false,
      node_shared_http_parser: false,
      node_shared_libuv: false,
      node_shared_nghttp2: false,
      node_shared_nghttp3: false,
      node_shared_ngtcp2: false,
      node_shared_openssl: false,
      node_shared_simdjson: false,
      node_shared_simdutf: false,
      node_shared_sqlite: false,
      node_shared_uvwasi: false,
      node_shared_zlib: false,
      node_shared_zstd: false,
      node_tag: '',
      node_target_type: 'executable',
      node_use_amaro: true,
      node_use_bundled_v8: true,
      node_use_node_code_cache: true,
      node_use_node_snapshot: true,
      node_use_openssl: true,
      node_use_sqlite: true,
      node_use_v8_platform: true,
      node_with_ltcg: true,
      node_without_node_options: false,
      node_write_snapshot_as_array_literals: true,
      openssl_is_fips: false,
      openssl_quic: false,
      ossfuzz: false,
      shlib_suffix: 'so.137',
      single_executable_application: true,
      suppress_all_error_on_warn: false,
      target_arch: 'x64',
      ubsan: 0,
      use_ccache_win: 0,
      use_prefix_to_find_headers: false,
      v8_enable_31bit_smis_on_64bit_arch: 0,
      v8_enable_extensible_ro_snapshot: 0,
      v8_enable_external_code_space: 0,
      v8_enable_gdbjit: 0,
      v8_enable_hugepage: 0,
      v8_enable_i18n_support: 1,
      v8_enable_inspector: 1,
      v8_enable_javascript_promise_hooks: 1,
      v8_enable_lite_mode: 0,
      v8_enable_maglev: 1,
      v8_enable_object_print: 1,
      v8_enable_pointer_compression: 0,
      v8_enable_pointer_compression_shared_cage: 0,
      v8_enable_sandbox: 0,
      v8_enable_short_builtin_calls: 1,
      v8_enable_wasm_simd256_revec: 1,
      v8_enable_webassembly: 1,
      v8_optimized_debug: 1,
      v8_promise_internal_field_count: 1,
      v8_random_seed: 0,
      v8_trace_maps: 0,
      v8_use_siphash: 1,
      want_separate_host_toolset: 0
    }
  },
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  getActiveResourcesInfo: [Function: getActiveResourcesInfo],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  loadEnvFile: [Function: loadEnvFile],
  cpuUsage: [Function: cpuUsage],
  threadCpuUsage: [Function: threadCpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function: memoryUsage] { rss: [Function: rss] },
  constrainedMemory: [Function: constrainedMemory],
  availableMemory: [Function: availableMemory],
  kill: [Function: kill],
  exit: [Function: exit],
  execve: [Function: execve],
  ref: [Function: ref],
  unref: [Function: unref],
  finalization: [Getter/Setter],
  hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
  openStdin: [Function (anonymous)],
  allowedNodeEnvironmentFlags: [Getter/Setter],
  features: {
    inspector: true,
    debug: false,
    uv: true,
    ipv6: true,
    tls_alpn: true,
    tls_sni: true,
    tls_ocsp: true,
    tls: true,
    openssl_is_boringssl: false,
    cached_builtins: [Getter],
    require_module: [Getter],
    typescript: [Getter]
  },
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  sourceMapsEnabled: [Getter],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  getBuiltinModule: [Function: getBuiltinModule],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  env: {
    ACLOCAL_PATH: '/mingw64/share/aclocal:/usr/share/aclocal',
    ALLUSERSPROFILE: 'C:\\ProgramData',
    ANDROID_HOME: 'C:\\Users\\mauuu\\AppData\\Local\\Android\\Sdk',
    ANDROID_SDK_ROOT: 'C:\\Users\\mauuu\\AppData\\Local\\Android\\Sdk',
    APPDATA: 'C:\\Users\\mauuu\\AppData\\Roaming',
    ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
    ChocolateyLastPathUpdate: '133773660353215518',
    CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\crashpad_25888_YRCGSQMBATOREWFC',
    COLORTERM: 'truecolor',
    COMMONPROGRAMFILES: 'C:\\Program Files\\Common Files',
    'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
    CommonProgramW6432: 'C:\\Program Files\\Common Files',
    COMPUTERNAME: 'DESKTOP-G2ENJKE',
    COMSPEC: 'C:\\WINDOWS\\system32\\cmd.exe',
    CONFIG_SITE: '/etc/config.site',
    COPILOT_DEBUG_NONCE: '715ab327403c7b5c11c1f4de3e48b44f',
    DISPLAY: 'needs-to-be-defined',
    DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
    EFC_19216_1262719628: '1',
    EFC_19216_1592913036: '1',
    EFC_19216_2283032206: '1',
    EFC_19216_2775293581: '1',
    EFC_19216_344590478: '1',
    EFC_19216_3789132940: '1',
    EFC_19216_4126798990: '1',
    EXEPATH: 'C:\\Program Files\\Git\\bin',
    FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
    FPS_BROWSER_USER_PROFILE_STRING: 'Default',
    GIT_ASKPASS: 'c:\\Users\\mauuu\\AppData\\Roaming\\Code\\User\\globalStorage\\vscode.git\\askpass\\493597c785d4c5cb\\askpa
ss.sh',
    HOME: 'C:\\Users\\mauuu',
    HOMEDRIVE: 'C:',
    HOMEPATH: '\\Users\\mauuu',
    HOSTNAME: 'DESKTOP-G2ENJKE',
    INFOPATH: '/usr/local/info:/usr/share/info:/usr/info:/share/info',
    LANG: 'en_US.UTF-8',
    LOCALAPPDATA: 'C:\\Users\\mauuu\\AppData\\Local',
    LOGONSERVER: '\\\\DESKTOP-G2ENJKE',
    MANPATH: '/mingw64/local/man:/mingw64/share/man:/usr/local/man:/usr/share/man:/usr/man:/share/man',
    MINGW_CHOST: 'x86_64-w64-mingw32',
    MINGW_PACKAGE_PREFIX: 'mingw-w64-x86_64',
    MINGW_PREFIX: '/mingw64',
    MSYSTEM: 'MINGW64',
    MSYSTEM_CARCH: 'x86_64',
    MSYSTEM_CHOST: 'x86_64-w64-mingw32',
    MSYSTEM_PREFIX: '/mingw64',
    NUMBER_OF_PROCESSORS: '8',
    NVM_HOME: 'C:\\Users\\mauuu\\AppData\\Roaming\\nvm',
    NVM_SYMLINK: 'C:\\Program Files\\nodejs',
    OneDrive: 'C:\\Users\\mauuu\\OneDrive',
    OPENSSL_CONF: 'C:\\Program Files\\OpenSSL-Win64\\bin\\openssl.cfg',
    ORIGINAL_PATH: 'C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\mauuu\\bin;C:\\Users\\ma
uuu\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand;C:\\Users\\mauuu\\AppData\\Roaming\\Code\
\User\\globalStorage\\github.copilot-chat\\copilotCli;C:\\Program Files\\Eclipse Adoptium\\jdk-8.0.472.8-hotspot\\bin;C:\\Pro
gram Files\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\S
ystem32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\PostgreSQL\\14
\\bin;C:\\Users\\mauuu\\AppData\\Local\\Android\\Sdk\\platform-tools;C:\\Program Files\\dotnet;C:\\Users\\mauuu\\AppData\\Roa
ming\\npm;C:\\Program Files\\MongoDB\\Server\\7.0\\bin;C:\\Program Files\\MongoDB\\Server\\7.0\\data;C:\\Users\\mauuu\\AppDat
a\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\Users\\pan
doc-3.6.4\\pandoc.exe;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Kubernetes\\Minikube;C:\\Program F
iles\\ffmpeg-2025-04-23-git-25b0a8e295-essentials_build\\bin;C:\\Program Files\\PuTTY;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\W
INDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Users\\mauuu\\AppDat
a\\Local\\Programs\\Python\\Python312\\Scripts;C:\\Users\\mauuu\\AppData\\Local\\Programs\\Python\\Python312;C:\\Users\\mauuu
\\AppData\\Local\\Programs\\Python\\Launcher;C:\\Program Files\\sqlite3;C:\\Users\\mauuu\\AppData\\Local\\GitHubDesktop\\bin;
C:\\Users\\mauuu\\AppData\\Local\\Programs\\mongosh;C:\\Users\\mauuu\\AppData\\Roaming\\npm;C:\\Users\\mauuu\\AppData\\Roamin
g\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\OpenSSL-Win64\\bin;C:\\Users\\mauuu\\AppData\\Local\\Programs\\MiKTeX\\mi
ktex\\bin\\x64;C:\\Users\\mauuu\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\mauuu\\AppData\\Local\\Programs\
\cursor\\resources\\app\\bin;C:\\Users\\mauuu\\AppData\\Local\\Microsoft\\WindowsApps',
    ORIGINAL_TEMP: '/tmp',
    ORIGINAL_TMP: '/tmp',
    OS: 'Windows_NT',
    PATH: 'C:\\Users\\mauuu\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Fil
es\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\
Users\\mauuu\\bin;C:\\Users\\mauuu\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand;C:\\Users\
\mauuu\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\copilotCli;C:\\Program Files\\Eclipse Adoptium\\jdk
-8.0.472.8-hotspot\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS
\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:
\\Program Files\\PostgreSQL\\14\\bin;C:\\Users\\mauuu\\AppData\\Local\\Android\\Sdk\\platform-tools;C:\\Program Files\\dotnet
;C:\\Users\\mauuu\\AppData\\Roaming\\npm;C:\\Program Files\\MongoDB\\Server\\7.0\\bin;C:\\Program Files\\MongoDB\\Server\\7.0
\\data;C:\\Users\\mauuu\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\
Amazon\\AWSCLIV2;C:\\Users\\pandoc-3.6.4\\pandoc.exe;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Kub
ernetes\\Minikube;C:\\Program Files\\ffmpeg-2025-04-23-git-25b0a8e295-essentials_build\\bin;C:\\Program Files\\PuTTY;C:\\WIND
OWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\O
penSSH;C:\\Users\\mauuu\\AppData\\Local\\Programs\\Python\\Python312\\Scripts;C:\\Users\\mauuu\\AppData\\Local\\Programs\\Pyt
hon\\Python312;C:\\Users\\mauuu\\AppData\\Local\\Programs\\Python\\Launcher;C:\\Program Files\\sqlite3;C:\\Users\\mauuu\\AppD
ata\\Local\\GitHubDesktop\\bin;C:\\Users\\mauuu\\AppData\\Local\\Programs\\mongosh;C:\\Users\\mauuu\\AppData\\Roaming\\npm;C:
\\Users\\mauuu\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\OpenSSL-Win64\\bin;C:\\Users\\mauuu\\AppDa
ta\\Local\\Programs\\MiKTeX\\miktex\\bin\\x64;C:\\Users\\mauuu\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\m
auuu\\AppData\\Local\\Programs\\cursor\\resources\\app\\bin;C:\\Users\\mauuu\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Prog
ram Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl',
    PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
    PKG_CONFIG_PATH: '/mingw64/lib/pkgconfig:/mingw64/share/pkgconfig',
    PLINK_PROTOCOL: 'ssh',
    PROCESSOR_ARCHITECTURE: 'AMD64',
    PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 140 Stepping 1, GenuineIntel',
    PROCESSOR_LEVEL: '6',
    PROCESSOR_REVISION: '8c01',
    ProgramData: 'C:\\ProgramData',
    PROGRAMFILES: 'C:\\Program Files',
    'ProgramFiles(x86)': 'C:\\Program Files (x86)',
    ProgramW6432: 'C:\\Program Files',
    PS1: '\\[\\033]0;$TITLEPREFIX:$PWD\\007\\]\\n\\[\\033[32m\\]\\u@\\h \\[\\033[35m\\]$MSYSTEM \\[\\033[33m\\]\\w\\[\\033[36
m\\]`__git_ps1`\\[\\033[0m\\]\\n$ ',
    PSModulePath: 'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules',
    PUBLIC: 'C:\\Users\\Public',
    PWD: '/c/Users/mauuu/OneDrive/Escritorio/95195 BACK-I LUNES 20.30 a 22.30/95195-CLASE/CLASE_25-10-06',
    SESSIONNAME: 'Console',
    SHELL: 'C:\\Program Files\\Git\\usr\\bin\\bash.exe',
    SHLVL: '1',
    SSH_AGENT_PID: '789',
    SSH_ASKPASS: '/mingw64/bin/git-askpass.exe',
    SSH_AUTH_SOCK: '/tmp/ssh-lJpAsA3G2vER/agent.788',
    SYSTEMDRIVE: 'C:',
    SYSTEMROOT: 'C:\\WINDOWS',
    TEMP: 'C:\\Users\\mauuu\\AppData\\Local\\Temp',
    TERM_PROGRAM: 'vscode',
    TERM_PROGRAM_VERSION: '1.125.1',
    TMP: 'C:\\Users\\mauuu\\AppData\\Local\\Temp',
    TMPDIR: 'C:\\Users\\mauuu\\AppData\\Local\\Temp',
    USERDOMAIN: 'DESKTOP-G2ENJKE',
    USERDOMAIN_ROAMINGPROFILE: 'DESKTOP-G2ENJKE',
    USERNAME: 'mauuu',
    USERPROFILE: 'C:\\Users\\mauuu',
    VSCODE_GIT_ASKPASS_EXTRA_ARGS: '',
    VSCODE_GIT_ASKPASS_MAIN: 'c:\\Users\\mauuu\\AppData\\Roaming\\Code\\User\\globalStorage\\vscode.git\\askpass\\493597c785d
4c5cb\\askpass-main.js',
    VSCODE_GIT_ASKPASS_NODE: 'C:\\Users\\mauuu\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe',
    VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-6291aa270b-sock',
    VSCODE_NONCE: '5c051815-cd0a-473d-a3ba-0302947588e8',
    WINDIR: 'C:\\WINDOWS',
    ZES_ENABLE_SYSMAN: '1',
    _: '/usr/bin/winpty'
  },
  title: ' ',
  argv: [
    'C:\\Users\\mauuu\\AppData\\Roaming\\nvm\\v24.8.0\\node.exe',
    'C:\\Users\\mauuu\\OneDrive\\Escritorio\\95195 BACK-I LUNES 20.30 a 22.30\\95195-CLASE\\CLASE_25-10-06\\compro.js'
  ],
  execArgv: [],
  pid: 13924,
  ppid: 10328,
  execPath: 'C:\\Users\\mauuu\\AppData\\Roaming\\nvm\\v24.8.0\\node.exe',
  debugPort: 9229,
  argv0: 'C:/Users/mauuu/AppData/Roaming/nvm/v24.8.0/node.exe',
  _preload_modules: [],
  report: [Getter],
  mainModule: {
    id: '.',
    path: 'C:\\Users\\mauuu\\OneDrive\\Escritorio\\95195 BACK-I LUNES 20.30 a 22.30\\95195-CLASE\\CLASE_25-10-06',
    exports: {},
    filename: 'C:\\Users\\mauuu\\OneDrive\\Escritorio\\95195 BACK-I LUNES 20.30 a 22.30\\95195-CLASE\\CLASE_25-10-06\\compro.
js',
    loaded: false,
    children: [],
    paths: [
      'C:\\Users\\mauuu\\OneDrive\\Escritorio\\95195 BACK-I LUNES 20.30 a 22.30\\95195-CLASE\\CLASE_25-10-06\\node_modules',
      'C:\\Users\\mauuu\\OneDrive\\Escritorio\\95195 BACK-I LUNES 20.30 a 22.30\\95195-CLASE\\node_modules',
      'C:\\Users\\mauuu\\OneDrive\\Escritorio\\95195 BACK-I LUNES 20.30 a 22.30\\node_modules',
      'C:\\Users\\mauuu\\OneDrive\\Escritorio\\node_modules',
      'C:\\Users\\mauuu\\OneDrive\\node_modules',
      'C:\\Users\\mauuu\\node_modules',
      'C:\\Users\\node_modules',
      'C:\\node_modules'
    ],
    Symbol(kIsMainSymbol): true,
    Symbol(kIsCachedByESMLoader): false,
    Symbol(kURL): undefined,
    Symbol(kFormat): undefined,
    Symbol(kIsExecuting): true
  },
  Symbol(shapeMode): false,
  Symbol(kCapture): false
}
  */
