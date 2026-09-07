"use client";

export interface AdminUser {
  username: string;
  name: string;
  role: string;
  email: string;
}

const ADMIN_STORAGE_KEY = "oxonom_admin_auth_v1";

const VALID_USERNAME = "ugurxugurlu";
const VALID_PASSWORD = "Ugur2803*";

export function getAdminSession(): AdminUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.username === VALID_USERNAME && parsed.expiresAt > Date.now()) {
      return {
        username: parsed.username,
        name: "Uğur Uğurlu",
        role: "Süper Yönetici",
        email: "ugur@oxonompos.com",
      };
    }
  } catch {
    // Ignore invalid JSON
  }
  return null;
}

export function loginAdmin(username: string, password: string): { success: boolean; error?: string } {
  const cleanUser = username.trim();
  const cleanPass = password.trim();

  if (cleanUser !== VALID_USERNAME || cleanPass !== VALID_PASSWORD) {
    return {
      success: false,
      error: "Kullanıcı adı veya şifre hatalı. Lütfen bilgilerinizi kontrol ediniz.",
    };
  }

  const sessionData = {
    username: VALID_USERNAME,
    loggedInAt: Date.now(),
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days session
  };

  try {
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(sessionData));
    document.cookie = `oxonom_admin_logged=1; path=/; max-age=604800; SameSite=Lax`;
  } catch (err) {
    console.error("Storage error:", err);
  }

  return { success: true };
}

export function logoutAdmin(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(ADMIN_STORAGE_KEY);
    document.cookie = `oxonom_admin_logged=; path=/; max-age=0`;
  } catch (err) {
    console.error("Logout error:", err);
  }
}
