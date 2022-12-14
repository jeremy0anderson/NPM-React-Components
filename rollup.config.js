import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

const config = {
    input: 'src/Navigation.js',
    external: ['react'],
    output: {
        format: "umd",
        name: "navigation",
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ]
}
export default config;