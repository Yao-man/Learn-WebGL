 //  初始化着色器程序，让WebGL知道如何绘制我们的数据
 function initShaderProgram(gl, vsSource, fsSource) {
     //获取顶点和片源着色器
     const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
     const fragmentShader = loadShader(gl, gl.VERTEX_SHADER, fsSource);

     //创建着色器程序,关联着色器，链接成可执行文件( .exe)
     const shaderProgram = gl.createProgram();
     gl.attachShader(shaderProgram, vertexShader);
     gl.attachShader(shaderProgram, fragmentShader);
     gl.linkProgram(shaderProgram);

     //判断链接是否成功
     if (!gl.getProgramParmeter(shaderProgram, gl.LINK_STATUS)) {
         alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram))
         return null;
     }
     return shaderProgram;


 }

 //创建指定类型着色器，上传源码并编译
 function loadShader(gl, type, source) {
     const shader = gl.createShader(type);

     //着色器绑定源码
     gl.shaderSource(shader, source);

     //编译着色器
     gl.compileShader(shader);

     //判断着色器是否编译成功
     if (!gl.getShaderParmeter(shader, gl.COMPILE_STATUS)) {
         alert('Shader Error:' + gl.getShaderInfoLog(shader));
         gl.deleteShader(shader);
         return null;
     }

     return shader;

 }

 function initBuffers(gl, positions) {
     //为图形点坐标创建缓冲区
     const positionBuffer = gl.createBuffer();

     //绑定坐标缓冲区
     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

     //上传坐标数据
     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

     return {
         position: positionBuffer
     };
 }