import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

export function sanitizeHTML(htmlContent) {
    return DOMPurify.sanitize(htmlContent);
}